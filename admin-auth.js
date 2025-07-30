// Admin Authentication System for Corprex
// Credentials: admin / admin123

// Configuration
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';
const SESSION_KEY = 'corprex_admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Check if user is authenticated
function isAuthenticated() {
    const session = getSession();
    if (!session) return false;
    
    // Check if session is expired
    const now = new Date().getTime();
    if (now > session.expiresAt) {
        clearSession();
        return false;
    }
    
    return true;
}

// Get session from sessionStorage
function getSession() {
    const sessionData = sessionStorage.getItem(SESSION_KEY);
    if (!sessionData) return null;
    
    try {
        return JSON.parse(sessionData);
    } catch (e) {
        return null;
    }
}

// Save session to sessionStorage
function saveSession(username) {
    const now = new Date().getTime();
    const session = {
        username: username,
        loginTime: now,
        expiresAt: now + SESSION_DURATION
    };
    
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

// Clear session
function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
}

// Handle login form submission
async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const submitBtn = document.getElementById('submitBtn');
    const errorMessage = document.getElementById('errorMessage');
    const rememberMe = document.getElementById('remember').checked;
    
    // Clear any previous error
    errorMessage.classList.remove('show');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        try {
            // Check if scheduler API is accessible
            const apiCheck = await fetch('https://corprex-scheduler.onrender.com/api/health');
            if (!apiCheck.ok) {
                console.warn('Scheduler API not responding, but proceeding with login');
            }
        } catch (error) {
            console.warn('Could not reach scheduler API:', error);
        }
        
        // Save session
        saveSession(username);
        
        // If remember me is checked, save username
        if (rememberMe) {
            localStorage.setItem('corprex_remember_username', username);
        } else {
            localStorage.removeItem('corprex_remember_username');
        }
        
        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'admin-dashboard.html';
        }, 500);
    } else {
        // Show error
        errorMessage.classList.add('show');
        errorMessage.textContent = 'Invalid username or password';
        
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Clear password field
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
}

// Handle logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        clearSession();
        window.location.href = 'adminlogin.html';
    }
}

// Check authentication and redirect if needed
function checkAuth() {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'admin-dashboard.html' && !isAuthenticated()) {
        // Redirect to login if not authenticated
        window.location.href = 'adminlogin.html';
    } else if (currentPage === 'adminlogin.html' && isAuthenticated()) {
        // Redirect to dashboard if already authenticated
        window.location.href = 'admin-dashboard.html';
    }
}

// Auto-fill username if remembered
function autoFillUsername() {
    const rememberedUsername = localStorage.getItem('corprex_remember_username');
    if (rememberedUsername && document.getElementById('username')) {
        document.getElementById('username').value = rememberedUsername;
        document.getElementById('remember').checked = true;
        document.getElementById('password').focus();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    checkAuth();
    
    // Auto-fill username if on login page
    if (window.location.pathname.includes('adminlogin.html')) {
        autoFillUsername();
    }
    
    // Update username display on dashboard
    if (window.location.pathname.includes('admin-dashboard.html')) {
        const session = getSession();
        if (session && document.getElementById('username')) {
            document.getElementById('username').textContent = session.username;
        }
    }
});

// Handle session timeout warning
let warningTimer;
function startSessionWarning() {
    const session = getSession();
    if (!session) return;
    
    const timeUntilExpiry = session.expiresAt - new Date().getTime();
    const warningTime = timeUntilExpiry - (5 * 60 * 1000); // Warn 5 minutes before expiry
    
    if (warningTime > 0) {
        warningTimer = setTimeout(() => {
            if (confirm('Your session will expire in 5 minutes. Do you want to stay logged in?')) {
                // Extend session
                saveSession(session.username);
                startSessionWarning();
            }
        }, warningTime);
    }
}

// Start warning timer on dashboard
if (window.location.pathname.includes('admin-dashboard.html')) {
    startSessionWarning();
}

// Clear warning timer on logout
window.addEventListener('beforeunload', function() {
    if (warningTimer) {
        clearTimeout(warningTimer);
    }
});

// Prevent back button after logout
window.addEventListener('pageshow', function(event) {
    if (event.persisted && window.location.pathname.includes('admin-dashboard.html')) {
        checkAuth();
    }
});

// Add keyboard shortcut for logout (Ctrl+Shift+L)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'L' && window.location.pathname.includes('admin-dashboard.html')) {
        handleLogout();
    }
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isAuthenticated,
        handleLogin,
        handleLogout,
        checkAuth
    };
}
