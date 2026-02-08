/**
 * Corprex Client Chat - Backend Integrated Version
 * 
 * FEATURES:
 * - Full Vercel backend integration
 * - API endpoint connectivity (/api/chat, /api/health)
 * - Authentication with session management
 * - Model switching (GPT-4, GPT-3.5, Claude, Llama, Mistral)
 * - Chat history persistence
 * - Automatic fallback to demo mode if backend unavailable
 * 
 * BACKEND URL: https://backend-kup9y8oxz-corprexs-projects.vercel.app
 */

// ==================== AUTHENTICATION ====================
// Immediately check authentication on script load - BEFORE any DOM manipulation
(function() {
    const auth = sessionStorage.getItem('corprexAuth');
    const currentPath = window.location.pathname;
    
    // Only redirect if we're on the client-chat page and not authenticated
    if (currentPath.includes('client-chat.html') && !auth) {
        window.location.replace('client-login.html');
        return;
    }
    
    if (auth) {
        try {
            const authData = JSON.parse(auth);
            // Check if session is expired (24 hours)
            const sessionAge = Date.now() - authData.loginTime;
            const maxAge = 24 * 60 * 60 * 1000; // 24 hours
            
            if (sessionAge > maxAge) {
                sessionStorage.removeItem('corprexAuth');
                window.location.replace('client-login.html');
                return;
            }
        } catch (e) {
            sessionStorage.removeItem('corprexAuth');
            window.location.replace('client-login.html');
            return;
        }
    }
})();

// Get authenticated user data
function getAuthData() {
    const auth = sessionStorage.getItem('corprexAuth');
    if (!auth) {
        window.location.href = 'client-login.html';
        return null;
    }
    return JSON.parse(auth);
}

// ==================== INITIALIZATION ====================
let currentChatId = null;
let chatHistory = [];
let messages = [];
let isLoading = false;
let currentModel = 'gpt-4';

// ==================== BACKEND CONFIGURATION ====================
// Automatically detect environment and set backend URL
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001' 
    : 'https://backend-kup9y8oxz-corprexs-projects.vercel.app';

// Check backend health on load
async function checkBackendHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/health`);
        const data = await response.json();
        console.log('Backend connected:', data);
        showConnectionStatus(true, data.database === 'connected');
        return true;
    } catch (error) {
        console.error('Backend connection failed:', error);
        showConnectionStatus(false);
        return false;
    }
}

// Show connection status
function showConnectionStatus(isConnected, dbConnected = false) {
    const statusDiv = document.getElementById('connectionStatus');
    if (statusDiv) {
        statusDiv.className = `connection-status ${isConnected ? 'connected' : 'disconnected'}`;
        statusDiv.innerHTML = `
            <div class="status-indicator"></div>
            <span class="status-text">
                ${isConnected ? 'Backend Connected' : 'Backend Offline'}
                ${dbConnected ? ' • DB Online' : ''}
            </span>
        `;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    console.log('Corprex Client Chat - Initializing...');
    
    // Check authentication first
    const authData = getAuthData();
    if (!authData) return;
    
    // Initialize UI components
    initializeUI();
    
    // Load existing chat history
    loadChatHistory();
    
    // Check backend health
    await checkBackendHealth();
    
    console.log('Corprex Client Chat - Ready');
});

// Initialize UI components
function initializeUI() {
    // Handle input
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('keypress', handleKeyPress);
        messageInput.addEventListener('input', autoResize);
    }
    
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (mobileMenu && sidebar) {
        mobileMenu.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            if (sidebarOverlay) sidebarOverlay.classList.toggle('active');
        });
    }
    
    if (sidebarOverlay && sidebar) {
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        });
    }
    
    // Window resize
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
}

// Load chat history from localStorage
function loadChatHistory() {
    try {
        const saved = localStorage.getItem('corprexChatHistory');
        if (saved) {
            chatHistory = JSON.parse(saved);
            renderChatHistory();
        }
    } catch (e) {
        console.error('Error loading chat history:', e);
        chatHistory = [];
    }
}

// Save chat history to localStorage
function saveChatHistory() {
    try {
        localStorage.setItem('corprexChatHistory', JSON.stringify(chatHistory));
    } catch (e) {
        console.error('Error saving chat history:', e);
    }
}

// **FIX: Enhanced function to save current chat messages**
function saveCurrentChatMessages() {
    if (currentChatId && messages.length > 0) {
        const chat = chatHistory.find(c => c.id === currentChatId);
        if (chat) {
            chat.messages = [...messages]; // Create a copy of messages array
            saveChatHistory();
        }
    }
}

// Render chat history sidebar
function renderChatHistory() {
    const historyContainer = document.querySelector('.chat-history');
    if (!historyContainer) return;
    
    // Keep any existing welcome message if no chats
    if (chatHistory.length === 0) {
        historyContainer.innerHTML = '<div class="chat-item active">Welcome to Corprex AI</div>';
        return;
    }
    
    historyContainer.innerHTML = '';
    
    chatHistory.forEach(chat => {
        const item = document.createElement('div');
        item.className = `chat-item ${chat.id === currentChatId ? 'active' : ''}`;
        item.onclick = () => loadChat(chat.id);
        item.textContent = chat.title || 'New Chat';
        
        historyContainer.appendChild(item);
    });
}

// Start new chat
function startNewChat() {
    // **FIX: Save current chat messages before starting new chat**
    saveCurrentChatMessages();
    
    currentChatId = Date.now().toString();
    messages = [];
    
    const newChat = {
        id: currentChatId,
        title: 'New Chat',
        timestamp: Date.now(),
        messages: []
    };
    
    chatHistory.unshift(newChat);
    saveChatHistory();
    renderChatHistory();
    renderMessages();
    
    // Close sidebar on mobile
    closeSidebarOnMobile();
}

// Load existing chat
function loadChat(chatId) {
    // **FIX: Save current chat messages before switching**
    saveCurrentChatMessages();
    
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
        currentChatId = chatId;
        messages = chat.messages || []; // Load the saved messages
        renderChatHistory();
        renderMessages();
        closeSidebarOnMobile();
    }
}

// Render messages in chat window
function renderMessages() {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    
    // Clear container first
    container.innerHTML = '';
    
    if (messages.length === 0) {
        // Show welcome screen
        const welcomeScreen = createWelcomeScreen();
        container.appendChild(welcomeScreen);
        return;
    }
    
    // Render all messages
    messages.forEach(msg => {
        const messageGroup = createMessageGroup(msg.role, msg.content);
        container.appendChild(messageGroup);
    });
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

// Create welcome screen
function createWelcomeScreen() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-screen';
    welcomeDiv.id = 'welcomeScreen';
    welcomeDiv.innerHTML = `
        <div class="logo-container">C</div>
        <h1 class="welcome-title">How can I help you today?</h1>
        <p class="welcome-subtitle">
            Powered by Corprex AI - Select a model and start chatting
        </p>
    `;
    return welcomeDiv;
}

// Create message group element
function createMessageGroup(role, content) {
    const messageGroup = document.createElement('div');
    messageGroup.className = `message-group ${role === 'user' ? 'user' : 'assistant'}`;
    
    const message = document.createElement('div');
    message.className = `message ${role === 'user' ? 'user' : 'assistant'}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = role === 'user' ? 'U' : 'A';
    
    const content_div = document.createElement('div');
    content_div.className = 'message-content';
    content_div.innerHTML = formatMessage(content);
    
    message.appendChild(avatar);
    message.appendChild(content_div);
    messageGroup.appendChild(message);
    
    return messageGroup;
}

// Format message content
function formatMessage(text) {
    // Basic markdown-like formatting
    let formatted = text
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    return `<p>${formatted}</p>`;
}

// Handle key press in input
function handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

// Auto resize textarea
function autoResize() {
    const textarea = document.getElementById('messageInput');
    if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }
}

// Show typing indicator
function showTypingIndicator() {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message-group assistant typing';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message assistant">
            <div class="message-avatar">A</div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    `;
    
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Send message
async function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    if (!messageInput) return;
    
    const userMessage = messageInput.value.trim();
    if (!userMessage || isLoading) return;
    
    // If no current chat, start a new one
    if (!currentChatId) {
        startNewChat();
    }
    
    // Add user message
    const userMsg = {
        role: 'user',
        content: userMessage,
        timestamp: Date.now()
    };
    messages.push(userMsg);
    
    // Update chat title if it's the first message
    if (messages.length === 1) {
        const chat = chatHistory.find(c => c.id === currentChatId);
        if (chat) {
            chat.title = userMessage.substring(0, 50);
            saveChatHistory();
            renderChatHistory();
        }
    }
    
    // **FIX: Save messages after adding user message**
    saveCurrentChatMessages();
    
    // Clear input and render
    messageInput.value = '';
    messageInput.style.height = 'auto';
    renderMessages();
    
    // Disable send button while loading
    const sendButton = document.querySelector('button[onclick*="sendMessage"]') || 
                     document.querySelector('.send-button');
    if (sendButton) sendButton.disabled = true;
    
    // Show loading state
    isLoading = true;
    showTypingIndicator();
    
    try {
        // Prepare conversation history for API
        const conversationHistory = messages.map(msg => ({
            role: msg.role,
            content: msg.content
        }));
        
        // Call backend API
        const response = await fetch(`${API_BASE_URL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('corprexAuthToken') || ''}`
            },
            body: JSON.stringify({
                model: currentModel,
                messages: conversationHistory
            })
        });
        
        const data = await response.json();
        
        if (response.ok && data.content) {
            // Add assistant message
            const assistantMsg = {
                role: 'assistant',
                content: data.content,
                timestamp: Date.now()
            };
            messages.push(assistantMsg);
        } else if (data.error) {
            // Handle API error
            const errorMsg = {
                role: 'assistant',
                content: `Error: ${data.error}. Please check your API configuration.`,
                timestamp: Date.now()
            };
            messages.push(errorMsg);
        } else {
            // Fallback to demo mode if backend fails
            const demoResponse = await generateDemoResponse(userMessage, currentModel);
            const assistantMsg = {
                role: 'assistant',
                content: demoResponse,
                timestamp: Date.now()
            };
            messages.push(assistantMsg);
        }
        
    } catch (error) {
        console.error('Error sending message:', error);
        
        // If backend is unavailable, use demo mode
        const demoResponse = await generateDemoResponse(userMessage, currentModel);
        const assistantMsg = {
            role: 'assistant',
            content: demoResponse,
            timestamp: Date.now()
        };
        messages.push(assistantMsg);
    } finally {
        isLoading = false;
        hideTypingIndicator();
        renderMessages();
        if (sendButton) sendButton.disabled = false;
        
        // **FIX: Always save messages after getting response**
        saveCurrentChatMessages();
    }
}

// Override global function if it exists
if (typeof window !== 'undefined') {
    window.sendMessage = sendMessage;
    window.startNewChat = startNewChat;
    window.handleKeyPress = handleKeyPress;
    window.API_BASE_URL = API_BASE_URL;
    
    // Function to handle suggestion clicks from HTML
    window.sendSuggestion = function(text) {
        const input = document.getElementById('messageInput');
        if (input) {
            input.value = text;
            sendMessage();
        }
    };
}

// Generate demo response (fallback when backend unavailable)
async function generateDemoResponse(userMessage, model) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    const responses = {
        'gpt-4': `I understand you're asking about: "${userMessage}"

This is a demo response from GPT-4 via Corprex. When your backend is properly configured with API keys, you'll receive actual AI responses.

To activate full functionality:
1. Ensure your backend is running at: ${API_BASE_URL}
2. Configure your API keys in the admin panel
3. Check the connection status indicator

The system is currently running in demo mode.`,

        'gpt-3.5-turbo': `Processing: "${userMessage}"

Demo response from GPT-3.5 Turbo. Configure your OpenAI API key in the backend to enable real responses.`,

        'claude-3': `Received: "${userMessage}"

This is a Claude 3 demo response. Connect your Anthropic API key to enable full functionality.`,

        'llama-2': `Input: "${userMessage}"

Demo response from Llama 2. Add your Replicate API key to access the actual model.`,

        'mistral': `Query: "${userMessage}"

Demo response from Mistral AI. Configure your Together AI API key for real responses.`
    };
    
    return responses[model] || responses['gpt-4'];
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.removeItem('corprexAuth');
        window.location.href = 'client-login.html';
    }
}

// Close sidebar on mobile
function closeSidebarOnMobile() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (window.innerWidth <= 768) {
        if (sidebar) sidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    }
}

// Set viewport height for mobile
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// **FIX: Enhanced beforeunload event to ensure current chat is saved**
window.addEventListener('beforeunload', function() {
    saveCurrentChatMessages();
});

// **FIX: Save messages when switching tabs or losing focus**
window.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        saveCurrentChatMessages();
    }
});

// Periodic session check (every 5 minutes)
setInterval(function() {
    const auth = sessionStorage.getItem('corprexAuth');
    if (!auth) {
        window.location.replace('client-login.html');
    } else {
        try {
            const authData = JSON.parse(auth);
            const sessionAge = Date.now() - authData.loginTime;
            const maxAge = 24 * 60 * 60 * 1000;
            
            if (sessionAge > maxAge) {
                sessionStorage.removeItem('corprexAuth');
                alert('Your session has expired. Please login again.');
                window.location.replace('client-login.html');
            }
        } catch (e) {
            sessionStorage.removeItem('corprexAuth');
            window.location.replace('client-login.html');
        }
    }
}, 5 * 60 * 1000);

// Clean up any inline event handlers on page load
document.addEventListener('DOMContentLoaded', function() {
    // Remove inline onclick handlers to avoid conflicts
    const elementsWithOnclick = document.querySelectorAll('[onclick]');
    elementsWithOnclick.forEach(el => {
        if (el.getAttribute('onclick').includes('startNewChat') || 
            el.getAttribute('onclick').includes('sendMessage')) {
            el.removeAttribute('onclick');
        }
    });
});
