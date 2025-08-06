// ==================== AUTHENTICATION ====================
// Immediately check authentication on script load
(function() {
    const auth = sessionStorage.getItem('corprexAuth');
    if (!auth) {
        window.location.href = 'client-login.html';
        return;
    }
    
    try {
        const authData = JSON.parse(auth);
        // Optional: Check if session is expired (e.g., 24 hours)
        const sessionAge = Date.now() - authData.loginTime;
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours
        
        if (sessionAge > maxAge) {
            sessionStorage.removeItem('corprexAuth');
            window.location.href = 'client-login.html';
            return;
        }
    } catch (e) {
        sessionStorage.removeItem('corprexAuth');
        window.location.href = 'client-login.html';
        return;
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
    // Set user info
    const authData = getAuthData();
    if (authData) {
        const usernameEl = document.getElementById('username');
        const avatarEl = document.getElementById('userAvatar');
        
        if (usernameEl) usernameEl.textContent = authData.username;
        if (avatarEl) avatarEl.textContent = authData.username.charAt(0).toUpperCase();
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
    // Message input auto-resize
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            this.style.height = '44px';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });
        
        // Handle Enter key
        messageInput.addEventListener('keypress', handleKeyPress);
    }
    
    // Send button
    const sendButton = document.getElementById('sendButton');
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
    
    // New chat button
    const newChatBtn = document.getElementById('newChatBtn');
    if (newChatBtn) {
        newChatBtn.addEventListener('click', startNewChat);
    }
    
    // Model selector
    const modelSelect = document.getElementById('modelSelect');
    if (modelSelect) {
        modelSelect.addEventListener('change', (e) => {
            currentModel = e.target.value;
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
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
    const historyContainer = document.getElementById('chatHistory');
    if (!historyContainer) return;
    
    historyContainer.innerHTML = '';
    
    chatHistory.forEach(chat => {
        const item = document.createElement('div');
        item.className = `chat-history-item ${chat.id === currentChatId ? 'active' : ''}`;
        item.onclick = () => loadChat(chat.id);
        
        const title = document.createElement('div');
        title.className = 'chat-history-title';
        title.textContent = chat.title || 'New Chat';
        
        const date = document.createElement('div');
        date.className = 'chat-history-date';
        date.textContent = new Date(chat.timestamp).toLocaleDateString();
        
        item.appendChild(title);
        item.appendChild(date);
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
    const container = document.getElementById('messagesContainer');
    const welcomeScreen = document.getElementById('welcomeScreen');
    
    if (!container) return;
    
    if (messages.length === 0) {
        if (welcomeScreen) {
            welcomeScreen.style.display = 'flex';
            container.innerHTML = '';
            container.appendChild(welcomeScreen);
        }
        return;
    }
    
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    container.innerHTML = '';
    
    messages.forEach(msg => {
        const messageEl = createMessageElement(msg.role, msg.content);
        container.appendChild(messageEl);
    });
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

// Create message element
function createMessageElement(role, content) {
    const message = document.createElement('div');
    message.className = 'message';
    
    const avatar = document.createElement('div');
    avatar.className = `message-avatar ${role === 'assistant' ? 'ai' : ''}`;
    avatar.textContent = role === 'user' ? 'U' : 'AI';
    
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'message-content';
    
    const roleLabel = document.createElement('div');
    roleLabel.className = 'message-role';
    roleLabel.textContent = role === 'user' ? 'You' : 'Corprex AI';
    
    const text = document.createElement('div');
    text.className = 'message-text';
    text.innerHTML = formatMessage(content);
    
    contentWrapper.appendChild(roleLabel);
    contentWrapper.appendChild(text);
    
    message.appendChild(avatar);
    message.appendChild(contentWrapper);
    
    return message;
}

// Format message content
function formatMessage(content) {
    // Convert markdown-style code blocks to HTML
    content = content.replace(/```(.*?)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
    // Convert inline code to HTML
    content = content.replace(/`([^`]+)`/g, '<code>$1</code>');
    // Convert line breaks to <br>
    content = content.replace(/\n/g, '<br>');
    return content;
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
    messageInput.style.height = '44px';
    renderMessages();
    
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
    }
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
    const container = document.getElementById('messagesContainer');
    if (!container) return;
    
    const indicator = document.createElement('div');
    indicator.id = 'typingIndicator';
    indicator.className = 'typing-indicator';
    indicator.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    container.appendChild(indicator);
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
        window.location.href = 'client-login.html';
    }
}, 5 * 60 * 1000);
