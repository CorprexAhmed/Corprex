/ Cal.com Integration for Corprex
// This maintains your styling while using Cal.com's scheduling functionality

(function() {
    'use strict';
    
    // Configuration
    const CALCOM_USERNAME = 'corprex';
    const EVENT_SLUG = 'firstlook';
    
    // Initialize Cal.com custom styling
    window.CalcomIntegration = {
        init: function() {
            // Apply custom styling for Cal.com embeds
            this.injectCustomStyles();
            
            // Listen for Cal.com iframe load events
            window.addEventListener('message', this.handleCalcomMessage.bind(this));
        },
        
        injectCustomStyles: function() {
            // Create a style tag for Cal.com customizations
            const style = document.createElement('style');
            style.textContent = `
                /* Cal.com Custom Styling to match Corprex design */
                .cal-embed {
                    --cal-bg-color: #0a0a0a !important;
                    --cal-bg-subtle: #1a1a1a !important;
                    --cal-bg-muted: #2a2a2a !important;
                    --cal-bg-emphasis: #333333 !important;
                    --cal-border-color: #333333 !important;
                    --cal-border-subtle: #2a2a2a !important;
                    --cal-border-booker: #333333 !important;
                    --cal-text-color: #ffffff !important;
                    --cal-text-subtle: #cccccc !important;
                    --cal-text-muted: #999999 !important;
                    --cal-text-emphasis: #ffffff !important;
                    --cal-brand-color: #ffffff !important;
                    --cal-brand-text-color: #000000 !important;
                    --cal-bg-dark-error: #ff4444 !important;
                    --cal-bg-success: #4CAF50 !important;
                    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                }
                
                /* Cal.com iframe container */
                #calcom-embed iframe {
                    width: 100% !important;
                    height: 100% !important;
                    border: none !important;
                    border-radius: 8px;
                    background: var(--secondary-black);
                }
                
                /* Override Cal.com's default styles */
                .cal-embed .dark {
                    --cal-bg: #0a0a0a !important;
                    --cal-bg-emphasis: #1a1a1a !important;
                }
                
                /* Ensure Cal.com respects our font */
                .cal-embed * {
                    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
                }
                
                /* Style the booking confirmation */
                .cal-embed .booking-confirmed {
                    background: var(--dark-gray) !important;
                    border: 1px solid var(--border-color) !important;
                }
                
                /* Mobile responsiveness for Cal.com embed */
                @media (max-width: 768px) {
                    #calcom-embed {
                        height: 500px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    #calcom-embed {
                        height: 450px !important;
                    }
                }
            `;
            document.head.appendChild(style);
        },
        
        handleCalcomMessage: function(e) {
            // Handle messages from Cal.com iframe
            if (e.origin !== 'https://cal.com' && e.origin !== 'https://app.cal.com') return;
            
            // Handle booking confirmation
            if (e.data.type === 'booking_confirmed') {
                console.log('Booking confirmed:', e.data);
                // You can add custom tracking or analytics here
                
                // Optional: Close the modal after a delay
                setTimeout(() => {
                    if (typeof closeScheduler === 'function') {
                        closeScheduler();
                    }
                }, 3000);
            }
        },
        
        // Utility function to generate Cal.com link
        getCalLink: function() {
            return `${CALCOM_USERNAME}/${EVENT_SLUG}`;
        }
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', CalcomIntegration.init.bind(CalcomIntegration));
    } else {
        CalcomIntegration.init();
    }
    
    // Expose configuration for use in other scripts
    window.CALCOM_CONFIG = {
        username: CALCOM_USERNAME,
        eventSlug: EVENT_SLUG,
        getLink: function() {
            return `${CALCOM_USERNAME}/${EVENT_SLUG}`;
        }
    };
})();
