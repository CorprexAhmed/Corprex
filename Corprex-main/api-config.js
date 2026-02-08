// api-config.js - API Configuration for Corprex Client Portal
// Replace the placeholder values with your actual API keys and endpoints

const API_CONFIGURATION = {
    // OpenAI Configuration
    openai: {
        apiKey: 'YOUR_OPENAI_API_KEY', // Get from https://platform.openai.com/api-keys
        models: {
            'gpt-4': {
                url: 'https://api.openai.com/v1/chat/completions',
                model: 'gpt-4',
                maxTokens: 4096,
                temperature: 0.7
            },
            'gpt-3.5-turbo': {
                url: 'https://api.openai.com/v1/chat/completions',
                model: 'gpt-3.5-turbo',
                maxTokens: 4096,
                temperature: 0.7
            }
        }
    },

    // Anthropic Configuration
    anthropic: {
        apiKey: 'YOUR_ANTHROPIC_API_KEY', // Get from https://console.anthropic.com/
        models: {
            'claude-3-opus': {
                url: 'https://api.anthropic.com/v1/messages',
                model: 'claude-3-opus-20240229',
                maxTokens: 4096
            },
            'claude-3-sonnet': {
                url: 'https://api.anthropic.com/v1/messages',
                model: 'claude-3-sonnet-20240229',
                maxTokens: 4096
            }
        }
    },

    // Replicate Configuration (for open source models)
    replicate: {
        apiKey: 'YOUR_REPLICATE_API_KEY', // Get from https://replicate.com/account/api-tokens
        models: {
            'llama-2-70b': {
                url: 'https://api.replicate.com/v1/predictions',
                version: 'YOUR_LLAMA_VERSION_ID', // Get from Replicate model page
                maxTokens: 4096,
                temperature: 0.7
            },
            'mistral-7b': {
                url: 'https://api.replicate.com/v1/predictions',
                version: 'YOUR_MISTRAL_VERSION_ID', // Get from Replicate model page
                maxTokens: 4096,
                temperature: 0.7
            }
        }
    },

    // Hugging Face Inference API
    huggingface: {
        apiKey: 'YOUR_HF_API_KEY', // Get from https://huggingface.co/settings/tokens
        models: {
            'mistral-7b': {
                url: 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1',
                maxTokens: 4096,
                temperature: 0.7
            }
        }
    },

    // Together AI Configuration
    together: {
        apiKey: 'YOUR_TOGETHER_API_KEY', // Get from https://api.together.xyz/
        models: {
            'llama-2-70b': {
                url: 'https://api.together.xyz/inference',
                model: 'togethercomputer/llama-2-70b-chat',
                maxTokens: 4096,
                temperature: 0.7
            },
            'mixtral-8x7b': {
                url: 'https://api.together.xyz/inference',
                model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
                maxTokens: 4096,
                temperature: 0.7
            }
        }
    },

    // Perplexity AI Configuration
    perplexity: {
        apiKey: 'YOUR_PERPLEXITY_API_KEY', // Get from https://www.perplexity.ai/
        models: {
            'pplx-70b': {
                url: 'https://api.perplexity.ai/chat/completions',
                model: 'pplx-70b-online',
                maxTokens: 4096
            }
        }
    },

    // Custom/Self-hosted Configuration
    custom: {
        endpoints: {
            'custom-llama': {
                url: 'YOUR_CUSTOM_ENDPOINT', // Your self-hosted endpoint
                apiKey: 'YOUR_CUSTOM_API_KEY', // If authentication is required
                headers: {
                    // Add any custom headers required
                    'X-Custom-Header': 'value'
                },
                requestFormat: 'openai', // 'openai', 'anthropic', or 'custom'
                maxTokens: 4096,
                temperature: 0.7
            }
        }
    }
};

// Helper functions for API calls

async function callOpenAI(messages, modelConfig, apiKey) {
    const response = await fetch(modelConfig.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: modelConfig.model,
            messages: messages,
            temperature: modelConfig.temperature,
            max_tokens: modelConfig.maxTokens,
            stream: false
        })
    });

    if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

async function callAnthropic(messages, modelConfig, apiKey) {
    // Convert messages to Anthropic format
    const anthropicMessages = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content
    }));

    const response = await fetch(modelConfig.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: modelConfig.model,
            messages: anthropicMessages,
            max_tokens: modelConfig.maxTokens
        })
    });

    if (!response.ok) {
        throw new Error(`Anthropic API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.content[0].text;
}

async function callReplicate(messages, modelConfig, apiKey) {
    // Format the prompt for Replicate
    const prompt = messages.map(m => 
        `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`
    ).join('\n\n');

    const response = await fetch(modelConfig.url, {
        method: 'POST',
        headers: {
            'Authorization': `Token ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            version: modelConfig.version,
            input: {
                prompt: prompt,
                max_new_tokens: modelConfig.maxTokens,
                temperature: modelConfig.temperature
            }
        })
    });

    if (!response.ok) {
        throw new Error(`Replicate API error: ${response.statusText}`);
    }

    const prediction = await response.json();
    
    // Poll for results
    while (prediction.status !== 'succeeded' && prediction.status !== 'failed') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const statusResponse = await fetch(prediction.urls.get, {
            headers: {
                'Authorization': `Token ${apiKey}`
            }
        });
        prediction = await statusResponse.json();
    }

    if (prediction.status === 'failed') {
        throw new Error('Replicate prediction failed');
    }

    return prediction.output.join('');
}

async function callHuggingFace(messages, modelConfig, apiKey) {
    // Format messages for HuggingFace
    const prompt = messages.map(m => 
        `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`
    ).join('\n\n') + '\n\nAssistant:';

    const response = await fetch(modelConfig.url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputs: prompt,
            parameters: {
                max_new_tokens: modelConfig.maxTokens,
                temperature: modelConfig.temperature,
                return_full_text: false
            }
        })
    });

    if (!response.ok) {
        throw new Error(`HuggingFace API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data[0].generated_text;
}

async function callTogether(messages, modelConfig, apiKey) {
    // Format for Together AI
    const prompt = messages.map(m => 
        `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`
    ).join('\n\n') + '\n\nAssistant:';

    const response = await fetch(modelConfig.url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: modelConfig.model,
            prompt: prompt,
            max_tokens: modelConfig.maxTokens,
            temperature: modelConfig.temperature,
            stop: ['User:', '\n\n']
        })
    });

    if (!response.ok) {
        throw new Error(`Together API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.output.choices[0].text;
}

// Main function to call any API
async function callAPI(provider, model, messages) {
    const config = API_CONFIGURATION[provider];
    if (!config) {
        throw new Error(`Unknown provider: ${provider}`);
    }

    const modelConfig = config.models?.[model] || config.endpoints?.[model];
    if (!modelConfig) {
        throw new Error(`Unknown model: ${model} for provider: ${provider}`);
    }

    const apiKey = config.apiKey;
    if (!apiKey || apiKey.includes('YOUR_')) {
        throw new Error(`API key not configured for provider: ${provider}`);
    }

    switch (provider) {
        case 'openai':
            return await callOpenAI(messages, modelConfig, apiKey);
        case 'anthropic':
            return await callAnthropic(messages, modelConfig, apiKey);
        case 'replicate':
            return await callReplicate(messages, modelConfig, apiKey);
        case 'huggingface':
            return await callHuggingFace(messages, modelConfig, apiKey);
        case 'together':
            return await callTogether(messages, modelConfig, apiKey);
        case 'perplexity':
            return await callOpenAI(messages, modelConfig, apiKey); // Uses OpenAI format
        case 'custom':
            // Implement custom logic based on your needs
            throw new Error('Custom provider not implemented');
        default:
            throw new Error(`Unknown provider: ${provider}`);
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { API_CONFIGURATION, callAPI };
}