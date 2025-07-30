// Scheduler API Integration - Configured for Corprex
// This file is configured with your actual API URL

const SCHEDULER_API = {
    // Your Render API URL
    baseURL: 'https://corprex-scheduler.onrender.com/api',
    
    // Check if API is available
    async checkHealth() {
        try {
            const response = await fetch(`${this.baseURL}/health`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log('API Health:', data);
            return response.ok;
        } catch (error) {
            console.error('API health check failed:', error);
            return false;
        }
    },
    
    // Get available dates for a month
    async getAvailableDates(year, month) {
        try {
            const response = await fetch(`${this.baseURL}/availability/dates?year=${year}&month=${month + 1}`);
            if (!response.ok) {
                throw new Error('Failed to fetch dates');
            }
            const data = await response.json();
            return data.availableDates || [];
        } catch (error) {
            console.error('Error fetching available dates:', error);
            return [];
        }
    },
    
    // Get available times for a date
    async getAvailableTimes(date) {
        try {
            // Format date as YYYY-MM-DD
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;
            
            const response = await fetch(`${this.baseURL}/availability/times?date=${dateStr}`);
            if (!response.ok) {
                throw new Error('Failed to fetch times');
            }
            const data = await response.json();
            return data.availableTimes || [];
        } catch (error) {
            console.error('Error fetching available times:', error);
            return [];
        }
    },
    
    // Book a meeting
    async bookMeeting(bookingData) {
        try {
            const response = await fetch(`${this.baseURL}/meetings/book`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData)
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Booking failed');
            }
            
            return data;
        } catch (error) {
            console.error('Error booking meeting:', error);
            throw error;
        }
    }
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSchedulerAPI);
} else {
    initializeSchedulerAPI();
}

function initializeSchedulerAPI() {
    console.log('Scheduler API initializing...');
    
    // Check API health
    SCHEDULER_API.checkHealth().then(isHealthy => {
        if (isHealthy) {
            console.log('✅ Scheduler API is connected and healthy');
        } else {
            console.warn('⚠️ Scheduler API is not responding. Please check:');
            console.warn('1. Is the backend deployed and running on Render?');
            console.warn('2. Wait 30-60 seconds for cold start if using free tier');
        }
    });
    
    // Override the existing generateCalendar function
    const originalGenerateCalendar = window.generateCalendar;
    window.generateCalendar = async function() {
        console.log('Generating calendar with API data...');
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
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
            
            // Generate calendar HTML
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            
            let html = '';
            
            // Add empty cells for first week
            for (let i = 0; i < firstDay; i++) {
                html += '<div class="calendar-cell empty"></div>';
            }
            
            // Add days
            for (let day = 1; day <= daysInMonth; day++) {
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isAvailable = availableDates.includes(dateStr);
                const date = new Date(year, month, day);
                const isPast = date < new Date().setHours(0, 0, 0, 0);
                
                if (isAvailable && !isPast) {
                    html += `
                        <div class="calendar-cell available" onclick="selectDate(${year}, ${month}, ${day})">
                            <span class="day-number">${day}</span>
                        </div>
                    `;
                } else {
                    html += `
                        <div class="calendar-cell">
                            <span class="day-number">${day}</span>
                        </div>
                    `;
                }
            }
            
            calendarDays.innerHTML = html;
            
        } catch (error) {
            console.error('Calendar generation error:', error);
            calendarDays.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #ff6b6b;">Failed to load calendar. Please refresh the page.</div>';
        }
    };
    
    // Initial calendar generation
    if (window.currentDate) {
        window.generateCalendar();
    }
    
    // Override selectDate to use API
    const originalSelectDate = window.selectDate;
    window.selectDate = async function(year, month, day) {
        console.log('Date selected:', year, month + 1, day);
        window.selectedDate = new Date(year, month, day);
        
        // Hide calendar view
        document.getElementById('calendarView').classList.remove('active');
        
        // Show time slots view
        document.getElementById('timeSlotsView').classList.add('active');
        
        // Update header
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = window.selectedDate.toLocaleDateString('en-US', options);
        document.getElementById('selectedDateDisplay').textContent = dateStr;
        
        // Show loading state
        const timeSlotsGrid = document.getElementById('timeSlotsGrid');
        timeSlotsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">Loading available times...</div>';
        
        try {
            // Get available times from API
            const availableTimes = await SCHEDULER_API.getAvailableTimes(window.selectedDate);
            console.log('Available times:', availableTimes);
            
            if (availableTimes.length === 0) {
                timeSlotsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #999;">No available times for this date</div>';
                return;
            }
            
            // Generate time slots HTML
            let html = '';
            availableTimes.forEach(time => {
                html += `
                    <div class="time-slot" onclick="selectTime('${time}', this)">
                        ${time}
                    </div>
                `;
            });
            
            timeSlotsGrid.innerHTML = html;
            
        } catch (error) {
            console.error('Time slots error:', error);
            timeSlotsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #ff6b6b;">Failed to load time slots. Please try again.</div>';
        }
    };
    
    // CRITICAL FIX: Remove the dummy form handler and replace with real API integration
    const schedulerForm = document.getElementById('schedulerForm');
    if (schedulerForm) {
        // Clone the form to remove ALL existing event listeners
        const newForm = schedulerForm.cloneNode(true);
        schedulerForm.parentNode.replaceChild(newForm, schedulerForm);
        
        // Add the REAL form submission handler
        newForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Real API submission starting...');
            
            const submitBtn = document.getElementById('submitBtn');
            const submitText = document.getElementById('submitText');
            const loadingSpinner = document.getElementById('loadingSpinner');
            
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
                
                // Detect which page we're on and get the correct form values
                let bookingData = {};
                
                // Check if we're on contact.html (has schedFirstName)
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
                // Otherwise we're on corprex-scheduler.html (has firstName)
                else {
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
                
                console.log('Booking data being sent:', bookingData);
                
                // Book the meeting with the REAL API
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
        
        console.log('✅ Form handler replaced with real API integration');
    }
}

// Log configuration
console.log('Scheduler API configured for Corprex');
console.log('API URL:', SCHEDULER_API.baseURL);

// Expose API for debugging
window.SCHEDULER_API = SCHEDULER_API;
