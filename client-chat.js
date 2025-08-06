/**
 * Corprex Client Chat - Fixed Version
 * 
 * IMPORTANT: To use this script:
 * 1. Remove any inline JavaScript from your client-chat.html
 * 2. Include this script at the END of the body tag:
 *    <script src="client-chat.js"></script>
 * 3. Ensure your HTML has these required elements:
 *    - id="chatContainer" for messages
 *    - id="messageInput" for input field
 *    - id="modelSelect" for model selector
 *    - class="chat-history" for sidebar history
 *    - class="user-section" for user info area
 * 
 * This script handles authentication, chat functionality, and session management.
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

// ==================== CHAT FUNCTIONALITY ====================

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Verify authentication once more after DOM loads
    const authData = getAuthData();
    if (!authData) {
        return; // Will redirect in getAuthData
    }
    
    // Update user info in header if elements exist
    const usernameEl = document.getElementById('username');
    const avatarEl = document.querySelector('.user-avatar');
    
    if (usernameEl) {
        usernameEl.textContent = authData.username;
    }
    if (avatarEl) {
        avatarEl.textContent = authData.username.charAt(0).toUpperCase();
        avatarEl.title = authData.username;
    }
    
    // Load chat history
    loadChatHistory();
    
    // Set up event listeners
    setupEventListeners();
    
    // Focus message input
    const messageInput = document.getElementById('messageInput');
    if (messageInput) messageInput.focus();
    
    // Initialize mobile viewport
    setViewportHeight();
});

// Set up all event listeners
function setupEventListeners() {
    // Message input auto-resize and keypress
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 200) + 'px';
        });
        
        messageInput.addEventListener('keypress', handleKeyPress);
    }
    
    // Send button - look for button with onclick="sendMessage()"
    const sendButton = document.querySelector('button[onclick*="sendMessage"]');
    if (sendButton) {
        sendButton.onclick = null; // Remove inline handler
        sendButton.addEventListener('click', sendMessage);
    }
    
    // New chat button - already has inline onclick="startNewChat()"
    // We'll override the global function instead
    
    // Model selector
    const modelSelect = document.getElementById('modelSelect');
    if (modelSelect) {
        currentModel = modelSelect.value; // Set initial value
        modelSelect.addEventListener('change', (e) => {
            currentModel = e.target.value;
        });
    }
    
    // Add logout button to user section
    const userSection = document.querySelector('.user-section');
    if (userSection && !document.getElementById('logoutBtn')) {
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'logoutBtn';
        logoutBtn.className = 'logout-btn';
        logoutBtn.textContent = 'Logout';
        logoutBtn.style.cssText = 'padding: 6px 12px; background: #ff4444; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px;';
        logoutBtn.addEventListener('click', handleLogout);
        userSection.appendChild(logoutBtn);
    }
    
    // Mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
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
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
        currentChatId = chatId;
        messages = chat.messages || [];
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
    avatar.textContent = role === 'user' ? 'U' : 'AI';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = formatMessage(content);
    
    message.appendChild(avatar);
    message.appendChild(contentDiv);
    messageGroup.appendChild(message);
    
    return messageGroup;
}

// Format message content
function formatMessage(content) {
    // Convert markdown-style formatting to HTML
    let formatted = content
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    return `<p>${formatted}</p>`;
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
        // Generate demo response (replace with actual API call when backend is ready)
        const response = await generateDemoResponse(userMessage, currentModel);
        
        // Add assistant message
        const assistantMsg = {
            role: 'assistant',
            content: response,
            timestamp: Date.now()
        };
        messages.push(assistantMsg);
        
        // Save chat
        const chat = chatHistory.find(c => c.id === currentChatId);
        if (chat) {
            chat.messages = messages;
            saveChatHistory();
        }
        
    } catch (error) {
        console.error('Error sending message:', error);
        const errorMsg = {
            role: 'assistant',
            content: 'Sorry, I encountered an error. Please try again.',
            timestamp: Date.now()
        };
        messages.push(errorMsg);
    } finally {
        isLoading = false;
        hideTypingIndicator();
        renderMessages();
        if (sendButton) sendButton.disabled = false;
    }
}

// Override global function if it exists
if (typeof window !== 'undefined') {
    window.sendMessage = sendMessage;
    window.startNewChat = startNewChat;
    window.handleKeyPress = handleKeyPress;
}

// Generate demo response
async function generateDemoResponse(userMessage, model) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    const responses = {
        'gpt-4': `I understand you're asking about: "${userMessage}"

As a Corprex Omega demonstration, I'm showing you how GPT-4 would respond when running on your private infrastructure. With Corprex Omega, you get:

• Complete data privacy - nothing leaves your servers
• Lightning-fast responses with local processing
• Full customization and control
• No API costs or rate limits

This is just a demo response. When properly configured with your API keys or local models, you'll get actual AI responses tailored to your needs.`,

        'gpt-3.5-turbo': `Processing your query: "${userMessage}"

This demonstrates GPT-3.5 Turbo running through Corprex Omega. You're experiencing enterprise-grade AI without external dependencies.`,

        'claude-3': `Thank you for your message: "${userMessage}"

This is Claude 3 via Corprex Omega, providing secure, private AI assistance within your infrastructure.`,

        'llama-2': `Llama 2 responding to: "${userMessage}"

Open-source models like Llama 2 offer complete transparency when deployed through Corprex Omega.`,

        'mistral': `Mistral AI processing: "${userMessage}"

Experience cutting-edge language models privately and securely with Corprex Omega.`
    };
    
    return responses[model] || responses['gpt-4'];
}

// Show typing indicator
function showTypingIndicator() {
    const container = document.getElementById('chatContainer');
    if (!container) return;
    
    // Remove any existing indicator
    hideTypingIndicator();
    
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group assistant';
    messageGroup.id = 'typingIndicator';
    
    const message = document.createElement('div');
    message.className = 'message assistant';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = 'AI';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
    
    message.appendChild(avatar);
    message.appendChild(contentDiv);
    messageGroup.appendChild(message);
    
    container.appendChild(messageGroup);
    container.scrollTop = container.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

// Handle Enter key
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Handle logout
function handleLogout() {
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

// Save chat before unload
window.addEventListener('beforeunload', function() {
    if (currentChatId && messages.length > 0) {
        const chat = chatHistory.find(c => c.id === currentChatId);
        if (chat) {
            chat.messages = messages;
            saveChatHistory();
        }
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
