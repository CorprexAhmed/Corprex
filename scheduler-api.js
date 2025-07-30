        // Add new listener
        newForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('Submitting booking...');
            
            const submitBtn = document.getElementById('submitBtn');
            const submitText = document.getElementById('submitText');
            const loadingSpinner = document.getElementById('loadingSpinner');
            
            // Show loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Scheduling...';
            loadingSpinner.classList.add('active');
            
            try {
                // Format date
                const year = window.selectedDate.getFullYear();
                const month = String(window.selectedDate.getMonth() + 1).padStart(2, '0');
                const day = String(window.selectedDate.getDate()).padStart(2, '0');
                const dateStr = `${year}-${month}-${day}`;
                
                // Prepare booking data - FIXED: Use correct form field IDs
                const bookingData = {
                    firstName: document.getElementById('schedFirstName').value,
                    lastName: document.getElementById('schedLastName').value,
                    email: document.getElementById('schedEmail').value,
                    phone: document.getElementById('schedPhone').value || '',
                    company: document.getElementById('schedCompany').value,
                    message: document.getElementById('schedMessage').value || '',
                    date: dateStr,
                    time: window.selectedTime,
                    timezone: document.getElementById('timezoneSelect').value
                };
                
                console.log('Booking data:', bookingData);
                
                // Book the meeting
                const result = await SCHEDULER_API.bookMeeting(bookingData);
                console.log('Booking result:', result);
                
                // Hide loading spinner
                loadingSpinner.classList.remove('active');
                
                // Hide form and show success
                document.getElementById('bookingForm').classList.remove('active');
                document.getElementById('bookingSuccess').classList.add('active');
                
                // Reset form
                newForm.reset();
                
            } catch (error) {
                console.error('Booking error:', error);
                
                // Hide loading spinner
                loadingSpinner.classList.remove('active');
                
                let errorMessage = 'Failed to schedule meeting. ';
                if (error.message.includes('fetch')) {
                    errorMessage += 'Cannot connect to booking service. The service may be starting up - please try again in 30 seconds.';
                } else {
                    errorMessage += error.message;
                }
                
                alert(errorMessage);
                
            } finally {
                submitBtn.disabled = false;
                submitText.textContent = 'Schedule Meeting';
            }
        });
    }
});

// Log configuration
console.log('Scheduler API configured for Corprex');
console.log('API URL:', SCHEDULER_API.baseURL);
