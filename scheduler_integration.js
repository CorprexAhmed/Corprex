// Scheduler Integration - Fixed Version
// This properly integrates the scheduler with the API and fixes all date selection issues

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Scheduler Integration...');
    
    // Wait for scheduler API to be ready
    function waitForAPI(callback) {
        if (typeof SCHEDULER_API !== 'undefined') {
            callback();
        } else {
            setTimeout(() => waitForAPI(callback), 100);
        }
    }
    
    waitForAPI(function() {
        console.log('✅ Scheduler API is ready');
        
        // Override generateCalendar to use API
        window.generateCalendar = async function() {
            const year = window.currentDate.getFullYear();
            const month = window.currentDate.getMonth();
            
            // Update month display
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                              'July', 'August', 'September', 'October', 'November', 'December'];
            document.getElementById('calendarMonth').textContent = `${monthNames[month]} ${year}`;
            
            // Show loading state
            const calendarDays = document.getElementById('calendarDays');
            calendarDays.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">Loading available dates...</div>';
            
            try {
                // Get available dates from API
                const availableDates = await SCHEDULER_API.getAvailableDates(year, month);
                console.log('Available dates:', availableDates);
                
                // Clear loading state
                calendarDays.innerHTML = '';
                
                // Get first day of month and number of days
                const firstDay = new Date(year, month, 1).getDay();
                const daysInMonth = new Date(year, month + 1, 0).getDate();
                
                // Add empty cells for days before month starts
                for (let i = 0; i < firstDay; i++) {
                    const emptyDay = document.createElement('div');
                    emptyDay.className = 'calendar-day disabled';
                    calendarDays.appendChild(emptyDay);
                }
                
                // Add days of the month
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                for (let day = 1; day <= daysInMonth; day++) {
                    const dayElement = document.createElement('div');
                    dayElement.className = 'calendar-day';
                    
                    const dayDate = new Date(year, month, day);
                    dayDate.setHours(0, 0, 0, 0);
                    
                    // Format date for comparison
                    const dateMonth = String(dayDate.getMonth() + 1).padStart(2, '0');
                    const dateDay = String(dayDate.getDate()).padStart(2, '0');
                    const dateStr = `${dayDate.getFullYear()}-${dateMonth}-${dateDay}`;
                    
                    // Check if date is available from API
                    if (availableDates.includes(dateStr) && dayDate >= today) {
                        dayElement.classList.add('available');
                        // Fix: Create closure to capture the correct date
                        (function(capturedDate) {
                            dayElement.onclick = function() {
                                window.selectDate(capturedDate);
                            };
                        })(dayDate);
                    } else {
                        dayElement.classList.add('disabled');
                    }
                    
                    dayElement.innerHTML = `<span class="day-number">${day}</span>`;
                    calendarDays.appendChild(dayElement);
                }
            } catch (error) {
                console.error('Error generating calendar:', error);
                calendarDays.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #f00;">Error loading calendar. Please refresh the page.</div>';
            }
        };
        
        // Override selectDate function
        window.selectDate = function(date) {
            console.log('Date selected:', date);
            window.selectedDate = date;
            
            // Update selected state
            document.querySelectorAll('.calendar-day').forEach(day => {
                day.classList.remove('selected');
            });
            
            // Find and highlight the selected day
            const selectedDay = date.getDate();
            const calendarDays = document.querySelectorAll('.calendar-day');
            calendarDays.forEach(dayElement => {
                const dayNumber = dayElement.querySelector('.day-number');
                if (dayNumber && parseInt(dayNumber.textContent) === selectedDay && dayElement.classList.contains('available')) {
                    dayElement.classList.add('selected');
                }
            });
            
            // Show time slots
            window.showTimeSlots(date);
        };
        
        // Override showTimeSlots to use API
        window.showTimeSlots = async function(date) {
            const timeSlots = document.getElementById('timeSlots');
            timeSlots.classList.add('active');
            
            // Update selected date display
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('selectedDate').textContent = date.toLocaleDateString('en-US', options);
            
            // Show loading state
            const timeSlotsGrid = document.getElementById('timeSlotsGrid');
            timeSlotsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">Loading available times...</div>';
            
            try {
                // Get available times from API
                const availableTimes = await SCHEDULER_API.getAvailableTimes(date);
                console.log('Available times:', availableTimes);
                
                if (availableTimes.length === 0) {
                    timeSlotsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">No available times for this date</div>';
                    return;
                }
                
                // Clear loading state and generate time slots
                timeSlotsGrid.innerHTML = '';
                
                availableTimes.forEach(time => {
                    const slot = document.createElement('button');
                    slot.className = 'time-slot';
                    slot.textContent = time;
                    slot.onclick = function() {
                        window.selectTime(time, this);
                    };
                    timeSlotsGrid.appendChild(slot);
                });
                
            } catch (error) {
                console.error('Error loading times:', error);
                timeSlotsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #f00;">Error loading times. Please try again.</div>';
            }
        };
        
        // Override selectTime function
        window.selectTime = function(time, element) {
            console.log('Time selected:', time);
            window.selectedTime = time;
            
            // Update selected state
            document.querySelectorAll('.time-slot').forEach(slot => {
                slot.classList.remove('selected');
            });
            element.classList.add('selected');
            
            // Show booking form after a short delay
            setTimeout(() => {
                document.getElementById('calendarView').style.display = 'none';
                document.getElementById('bookingForm').classList.add('active');
                
                // Update booking summary
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const dateStr = window.selectedDate.toLocaleDateString('en-US', options);
                const timezone = document.getElementById('timezoneSelect').selectedOptions[0].text;
                document.getElementById('bookingSummary').textContent = `${dateStr} at ${window.selectedTime} ${timezone}`;
                
                // Scroll to top of the scheduler views
                const schedulerViews = document.querySelector('.scheduler-views');
                if (schedulerViews) {
                    schedulerViews.scrollTop = 0;
                }
            }, 300);
        };
        
        // Set up form submission handler
        const schedulerForm = document.getElementById('schedulerForm');
        if (schedulerForm) {
            // Remove any existing listeners
            const newForm = schedulerForm.cloneNode(true);
            schedulerForm.parentNode.replaceChild(newForm, schedulerForm);
            
            newForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                console.log('📤 Submitting booking...');
                
                const submitBtn = document.getElementById('submitBtn');
                const submitText = document.getElementById('submitText');
                const loadingSpinner = document.getElementById('loadingSpinner');
                
                // Validate required data
                if (!window.selectedDate || !window.selectedTime) {
                    alert('Please select a date and time');
                    return;
                }
                
                // Show loading state
                submitBtn.disabled = true;
                submitText.textContent = 'Scheduling...';
                if (loadingSpinner) loadingSpinner.classList.add('active');
                
                try {
                    // Format date
                    const year = window.selectedDate.getFullYear();
                    const month = String(window.selectedDate.getMonth() + 1).padStart(2, '0');
                    const day = String(window.selectedDate.getDate()).padStart(2, '0');
                    const dateStr = `${year}-${month}-${day}`;
                    
                    // Get form data - Fixed to use correct field IDs
                    const bookingData = {
                        firstName: document.getElementById('firstName').value,
                        lastName: document.getElementById('lastName').value,
                        email: document.getElementById('email').value,
                        phone: document.getElementById('phone')?.value || '',
                        company: document.getElementById('company').value,
                        message: document.getElementById('message')?.value || '',
                        date: dateStr,
                        time: window.selectedTime,
                        timezone: document.getElementById('timezoneSelect')?.value || 'America/New_York'
                    };
                    
                    console.log('Booking data:', bookingData);
                    
                    // Book the meeting via API
                    const result = await SCHEDULER_API.bookMeeting(bookingData);
                    console.log('✅ Booking successful:', result);
                    
                    // Hide loading spinner
                    if (loadingSpinner) loadingSpinner.classList.remove('active');
                    
                    // Hide form and show success
                    document.getElementById('bookingForm').classList.remove('active');
                    document.getElementById('bookingSuccess').classList.add('active');
                    
                    // Reset form
                    newForm.reset();
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    submitText.textContent = 'Schedule Meeting';
                    
                } catch (error) {
                    console.error('❌ Booking error:', error);
                    
                    // Hide loading spinner
                    if (loadingSpinner) loadingSpinner.classList.remove('active');
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    submitText.textContent = 'Schedule Meeting';
                    
                    // Show user-friendly error
                    let errorMessage = 'Failed to schedule meeting. ';
                    if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
                        errorMessage += 'The booking service is starting up. Please wait 30 seconds and try again.';
                    } else {
                        errorMessage += error.message;
                    }
                    
                    alert(errorMessage);
                }
            });
        }
        
        // Initialize calendar if scheduler is open
        if (document.getElementById('schedulerOverlay').classList.contains('active')) {
            window.generateCalendar();
        }
        
        // Check API health
        SCHEDULER_API.checkHealth().then(isHealthy => {
            if (!isHealthy) {
                console.warn('⚠️ Scheduler API is not responding. This is normal for Render free tier.');
                console.warn('The service will start automatically when you try to book.');
            }
        });
    });
});

console.log('📋 Scheduler Integration Script Loaded');
