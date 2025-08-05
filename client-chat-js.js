// Check authentication
function checkAuth() {
    const auth = sessionStorage.getItem('corprexAuth');
    if (!auth) {
        window.location.href = 'client-login.html';
        return null;
    }
    return JSON.parse(auth);
}

// Initialize
const auth = checkAuth();
if (auth) {
    // Set username
    document.getElementById('username').textContent = auth.username;
    document.getElementById('userAvatar').textContent = auth.username.charAt(0).toUpperCase();
}

// Chat state
let currentChatId = null;
let chatHistory = [];
let messages = [];
let isLoading = false;

// API configuration
const API_CONFIG = {
    'gpt-4': {
        url: 'https://api.openai.com/v1/chat/completions',
        apiKey: 'YOUR_OPENAI_API_KEY', // Replace with your API key
        model: 'gpt-4'
    },
    'gpt-3.5-turbo': {
        url: 'https://api.openai.com/v1/chat/completions',
        apiKey: 'YOUR_OPENAI_API_KEY', // Replace with your API key
        model: 'gpt-3.5-turbo'
    },
    'claude-3': {
        url: 'https://api.anthropic.com/v1/messages',
        apiKey: 'YOUR_ANTHROPIC_API_KEY', // Replace with your API key
        model: 'claude-3-opus-20240229'
    },
    'llama-2': {
        url: 'YOUR_LLAMA_ENDPOINT', // Replace with your endpoint
        apiKey: 'YOUR_LLAMA_API_KEY', // Replace with your API key
        model: 'llama-2-70b'
    },
    'mistral': {
        url: 'YOUR_MISTRAL_ENDPOINT', // Replace with your endpoint
        apiKey: 'YOUR_MISTRAL_API_KEY', // Replace with your API key
        model: 'mistral-large'
    }
};

// Load chat history from localStorage
function loadChatHistory() {
    const saved = localStorage.getItem('corprexChatHistory');
    if (saved) {
        chatHistory = JSON.parse(saved);
        renderChatHistory();
    }
}

// Save chat history to localStorage
function saveChatHistory() {
    localStorage.setItem('corprexChatHistory', JSON.stringify(chatHistory));
}

// Render chat history
function renderChatHistory() {
    const historyContainer = document.getElementById('chatHistory');
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
}

// Load existing chat
function loadChat(chatId) {
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
        currentChatId = chatId;
        messages = chat.messages || [];
        renderChatHistory();
        renderMessages();
    }
}

// Render messages
function renderMessages() {
    const container = document.getElementById('messagesContainer');
    const welcomeScreen = document.getElementById('welcomeScreen');
    
    if (messages.length === 0) {
        welcomeScreen.style.display = 'flex';
        container.innerHTML = '';
        container.appendChild(welcomeScreen);
        return;
    }
    
    welcomeScreen.style.display = 'none';
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
    roleLabel.textContent = role === 'user' ? 'You' : 'Corprex Omega';
    
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
    // Basic markdown-like formatting
    let formatted = content
        .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    return `<p>${formatted}</p>`;
}

// Create typing indicator
function createTypingIndicator() {
    const message = document.createElement('div');
    message.className = 'message';
    message.id = 'typingIndicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar ai';
    avatar.textContent = 'AI';
    
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'message-content';
    
    const roleLabel = document.createElement('div');
    roleLabel.className = 'message-role';
    roleLabel.textContent = 'Corprex Omega';
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    
    contentWrapper.appendChild(roleLabel);
    contentWrapper.appendChild(typingDiv);
    
    message.appendChild(avatar);
    message.appendChild(contentWrapper);
    
    return message;
}

// Send message
async function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (!message || isLoading) return;
    
    // Create new chat if needed
    if (!currentChatId) {
        startNewChat();
    }
    
    // Add user message
    messages.push({ role: 'user', content: message });
    
    // Update chat title if it's the first message
    const chat = chatHistory.find(c => c.id === currentChatId);
    if (chat && messages.length === 1) {
        chat.title = message.substring(0, 50) + (message.length > 50 ? '...' : '');
    }
    
    // Clear input
    input.value = '';
    input.style.height = '44px';
    
    // Render messages
    renderMessages();
    
    // Show typing indicator
    const container = document.getElementById('messagesContainer');
    const typingIndicator = createTypingIndicator();
    container.appendChild(typingIndicator);
    container.scrollTop = container.scrollHeight;
    
    // Disable send button
    isLoading = true;
    document.getElementById('sendBtn').disabled = true;
    
    try {
        // Get selected model
        const model = document.getElementById('modelSelect').value;
        const config = API_CONFIG[model];
        
        // Prepare API request
        const response = await callAI(config, messages);
        
        // Remove typing indicator
        document.getElementById('typingIndicator')?.remove();
        
        // Add AI response
        messages.push({ role: 'assistant', content: response });
        
        // Update chat history
        if (chat) {
            chat.messages = messages;
            chat.timestamp = Date.now();
            saveChatHistory();
        }
        
        // Render messages
        renderMessages();
        
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('typingIndicator')?.remove();
        
        // Show error message
        const errorMsg = {
            role: 'assistant',
            content: 'I apologize, but I encountered an error processing your request. Please ensure the API keys are configured correctly or try again later.'
        };
        messages.push(errorMsg);
        renderMessages();
    } finally {
        isLoading = false;
        document.getElementById('sendBtn').disabled = false;
        input.focus();
    }
}

// Call AI API
async function callAI(config, messages) {
    const model = document.getElementById('modelSelect').value;
    
    // For demo purposes, return a mock response if API keys are not configured
    if (config.apiKey.includes('YOUR_')) {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
        return getDemoResponse(messages[messages.length - 1].content, model);
    }
    
    // OpenAI format
    if (model.includes('gpt')) {
        const response = await fetch(config.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.apiKey}`
            },
            body: JSON.stringify({
                model: config.model,
                messages: messages,
                temperature: 0.7,
                max_tokens: 1000
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
    }
    
    // Anthropic format
    if (model.includes('claude')) {
        const response = await fetch(config.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': config.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: config.model,
                messages: messages.map(m => ({
                    role: m.role === 'user' ? 'user' : 'assistant',
                    content: m.content
                })),
                max_tokens: 1000
            })
        });
        
        const data = await response.json();
        return data.content[0].text;
    }
    
    // Other models - implement based on your endpoints
    throw new Error('Model not yet implemented');
}

// Demo responses when API keys are not configured
function getDemoResponse(userMessage, model) {
    const responses = {
        'gpt-4': `I'm running as GPT-4 in demo mode. Your message: "${userMessage}"

In a production Corprex Omega system, this would be processed entirely on your local infrastructure, ensuring complete data privacy and sovereignty. The response time would be near-instantaneous since there's no external API latency.

Key benefits you're experiencing:
• Zero data exposure to external services
• Sub-millisecond response times
• Complete control over model behavior
• No usage-based costs or rate limits

Would you like to learn more about how Corprex Omega can transform your AI operations?`,

        'gpt-3.5-turbo': `Running GPT-3.5 Turbo locally via Corprex Omega. I received: "${userMessage}"

This demonstrates the flexibility of our system - you can run multiple models and switch between them instantly, all while maintaining complete data privacy.`,

        'claude-3': `This is Claude 3 running on your Corprex Omega infrastructure. I'm processing: "${userMessage}"

With Corprex, you get enterprise-grade AI capabilities without compromising on security or compliance. Your data never leaves your premises.`,

        'llama-2': `Llama 2 responding via Corprex Omega: "${userMessage}"

Open-source models like Llama 2 offer complete transparency and customization options when running on your private infrastructure.`,

        'mistral': `Mistral AI processing locally: "${userMessage}"

Experience the power of state-of-the-art language models without external dependencies or recurring costs.`
    };
    
    return responses[model] || 'Demo response from Corprex Omega';
}

// Handle enter key
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Auto-resize textarea
document.getElementById('messageInput').addEventListener('input', function() {
    this.style.height = '44px';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
});

// Logout
function handleLogout() {
    sessionStorage.removeItem('corprexAuth');
    window.location.href = 'client-login.html';
}

// Initialize on load
window.onload = function() {
    loadChatHistory();
    document.getElementById('messageInput').focus();
};

// Save chat history before unload
window.onbeforeunload = function() {
    if (currentChatId && messages.length > 0) {
        const chat = chatHistory.find(c => c.id === currentChatId);
        if (chat) {
            chat.messages = messages;
            saveChatHistory();
        }
    }
};