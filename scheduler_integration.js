// Scheduler Integration - Fixed Version
// This replaces all dummy handlers with real API calls

// Wait for DOM and ensure scheduler-api.js is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Scheduler Integration...');
    
    // Remove ALL existing event listeners by cloning elements
    function removeAllListeners(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            const newElement = element.cloneNode(true);
            element.parentNode.replaceChild(newElement, element);
            return newElement;
        }
        return null;
    }
    
    // Initialize the scheduler form handler
    function initializeSchedulerForm() {
        const form = removeAllListeners('schedulerForm');
        if (!form) {
            console.log('❌ Scheduler form not found');
            return;
        }
        
        console.log('✅ Setting up real API form handler');
        
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('📤 Real API submission starting...');
            
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
                
                // Determine which form we're on and get values accordingly
                let bookingData = {};
                
                // Check if we're on contact.html (fields prefixed with 'sched')
                if (document.getElementById('schedFirstName')) {
                    bookingData = {
                        firstName: document.getElementById('schedFirstName').value,
                        lastName: document.getElementById('schedLastName').value,
                        email: document.getElementById('schedEmail').value,
                        phone: document.getElementById('schedPhone')?.value || '',
                        company: document.getElementById('schedCompany').value,
                        message: document.getElementById('schedMessage')?.value || '',
                        date: dateStr,
                        time: window.selectedTime,
                        timezone: document.getElementById('timezoneSelect')?.value || 'America/New_York'
                    };
                } 
                // Otherwise we're on corprex-scheduler.html
                else if (document.getElementById('firstName')) {
                    bookingData = {
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
                }
                
                console.log('📧 Booking data:', bookingData);
                
                // Make the actual API call
                const response = await fetch('https://corprex-scheduler.onrender.com/api/meetings/book', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingData)
                });
                
                const result = await response.json();
                
                if (!response.ok) {
                    throw new Error(result.error || 'Booking failed');
                }
                
                console.log('✅ Booking successful:', result);
                
                // Hide loading spinner
                if (loadingSpinner) loadingSpinner.classList.remove('active');
                
                // Hide form and show success
                document.getElementById('bookingForm').classList.remove('active');
                document.getElementById('bookingSuccess').classList.add('active');
                
                // Reset form
                form.reset();
                
            } catch (error) {
                console.error('❌ Booking error:', error);
                
                // Hide loading spinner
                if (loadingSpinner) loadingSpinner.classList.remove('active');
                
                // Show user-friendly error
                let errorMessage = 'Failed to schedule meeting. ';
                if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
                    errorMessage += 'The booking service is starting up. Please wait 30 seconds and try again.';
                } else {
                    errorMessage += error.message;
                }
                
                alert(errorMessage);
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitText.textContent = 'Schedule Meeting';
            }
        });
    }
    
    // Initialize calendar with API data
    async function initializeCalendar() {
        if (typeof window.generateCalendar !== 'function') {
            console.log('⏳ Waiting for calendar functions...');
            setTimeout(initializeCalendar, 100);
            return;
        }
        
        // Override generateCalendar to use API
        const originalGenerateCalendar = window.generateCalendar;
        window.generateCalendar = async function() {
            const year = window.currentDate.getFullYear();
            const month = window.currentDate.getMonth();
            
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                              'July', 'August', 'September', 'October', 'November', 'December'];
            document.getElementById('calendarMonth').textContent = `${monthNames[month]} ${year}`;
            
            const calendarDays = document.getElementById('calendarDays');
            calendarDays.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;">Loading...</div>';
            
            try {
                const response = await fetch(`https://corprex-scheduler.onrender.com/api/availability/dates?year=${year}&month=${month + 1}`);
                const data = await response.json();
                const availableDates = data.availableDates || [];
                
                // Generate calendar with available dates
                const firstDay = new Date(year, month, 1).getDay();
                const daysInMonth = new Date(year, month + 1, 0).getDate();
                
                calendarDays.innerHTML = '';
                
                // Add day headers
                const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                dayHeaders.forEach(day => {
                    const header = document.createElement('div');
                    header.className = 'calendar-header-day';
                    header.textContent = day;
                    calendarDays.appendChild(header);
                });
                
                // Add empty cells
                for (let i = 0; i < firstDay; i++) {
                    calendarDays.appendChild(document.createElement('div'));
                }
                
                // Add days
                for (let day = 1; day <= daysInMonth; day++) {
                    const dayCell = document.createElement('div');
                    dayCell.className = 'calendar-day';
                    dayCell.textContent = day;
                    
                    const currentDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const cellDate = new Date(year, month, day);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    if (cellDate < today) {
                        dayCell.classList.add('disabled');
                    } else if (availableDates.includes(currentDateStr)) {
                        dayCell.classList.add('available');
                        dayCell.onclick = () => {
                            window.selectedDate = cellDate;
                            window.showTimeSlots(cellDate);
                        };
                    } else {
                        dayCell.classList.add('disabled');
                    }
                    
                    calendarDays.appendChild(dayCell);
                }
            } catch (error) {
                console.error('Error loading calendar:', error);
                calendarDays.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: red;">Error loading calendar. Please refresh.</div>';
            }
        };
        
        // Override showTimeSlots to use API
        window.showTimeSlots = async function(date) {
            const timeSlots = document.getElementById('timeSlots');
            timeSlots.classList.add('active');
            
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('selectedDate').textContent = date.toLocaleDateString('en-US', options);
            
            const timeSlotsGrid = document.getElementById('timeSlotsGrid');
            timeSlotsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center;">Loading times...</div>';
            
            try {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const dateStr = `${year}-${month}-${day}`;
                
                const response = await fetch(`https://corprex-scheduler.onrender.com/api/availability/times?date=${dateStr}`);
                const data = await response.json();
                const availableTimes = data.availableTimes || [];
                
                timeSlotsGrid.innerHTML = '';
                
                if (availableTimes.length === 0) {
                    timeSlotsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No available times for this date</p>';
                    return;
                }
                
                availableTimes.forEach(time => {
                    const slot = document.createElement('button');
                    slot.className = 'time-slot';
                    slot.textContent = time;
                    slot.onclick = () => window.selectTime(time, slot);
                    timeSlotsGrid.appendChild(slot);
                });
            } catch (error) {
                console.error('Error loading times:', error);
                timeSlotsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">Error loading times. Please try again.</p>';
            }
        };
        
        // Initialize calendar
        if (window.currentDate) {
            window.generateCalendar();
        }
    }
    
    // Check API health on load
    fetch('https://corprex-scheduler.onrender.com/api/health')
        .then(response => response.json())
        .then(data => {
            console.log('✅ API Health Check:', data);
        })
        .catch(error => {
            console.warn('⚠️ API may be starting up. This is normal for Render free tier.');
            console.warn('Please wait 30-60 seconds and refresh if needed.');
        });
    
    // Initialize everything
    initializeSchedulerForm();
    initializeCalendar();
});

console.log('📋 Scheduler Integration loaded');
