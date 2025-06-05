const API_KEY = 'AIzaSyDppY9LZVQW7UtACpE4qNO9-51YN1AmrZ0'; 
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const chatMessages = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const closeButton = document.getElementById('close-chat');
const clearHistoryButton = document.getElementById('clear-history');

// Function to add message to chat
function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = isUser ? 'user.jpg' : 'bot.jpg';
    profileImage.alt = isUser ? 'User' : 'Bot';

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;

    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to generate response from Gemini API
async function generateResponse(prompt) {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: prompt
                }]
            }]
        })
    });

    if (!response.ok) {
        throw new Error('Failed to generate response');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// Function to handle user input
async function handleUserInput() {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        addMessage(userMessage, true);
        userInput.value = '';

        // Save user message to localStorage
        saveMessageToLocalStorage('You', userMessage);

        sendButton.disabled = true;
        userInput.disabled = true;

        // Show typing indicator while waiting for the bot's response
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.textContent = "Chatbot is typing...";
        chatMessages.appendChild(typingIndicator);

        try {
            let botMessage = '';

            // Check if message is a greeting (Hi, Hello)
            if (['hi', 'hello', 'hey', 'greetings'].some(greeting => userMessage.toLowerCase().includes(greeting))) {
                botMessage = `Hi! I'm an AI chatbot built by AbdiladiifDev, a professional developer. I'm here to assist you with business consulting and more. How can I help you today?`;
            } else {
                // Otherwise, generate response using Gemini API
                botMessage = await generateResponse(userMessage);
            }

            // Remove typing indicator after response
            typingIndicator.remove();

            addMessage(botMessage, false);

            // Save bot message to localStorage
            saveMessageToLocalStorage('Chatbot', botMessage);

        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, I encountered an error. Please try again.', false);
        } finally {
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();
        }
    }
}

// Function to save messages to localStorage
function saveMessageToLocalStorage(sender, message) {
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push({ sender, message });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Function to load messages from localStorage
function loadMessagesFromLocalStorage() {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.forEach(chat => {
        addMessage(chat.message, chat.sender === 'You');
    });
}

// Clear chat history
function clearChatHistory() {
    localStorage.removeItem('chatHistory');
    chatMessages.innerHTML = '';  // Clear the chat window
}

// Event listeners for sending messages
sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
    }
});

// Toggle chat window visibility
document.getElementById('chatbot-icon').addEventListener('click', () => {
    document.getElementById('chatbot-popup').style.display = 'flex';
});

// Close chat window
closeButton.addEventListener('click', () => {
    document.getElementById('chatbot-popup').style.display = 'none';
});

// Clear chat history
clearHistoryButton.addEventListener('click', clearChatHistory);

// Load chat history on page load
window.onload = loadMessagesFromLocalStorage;
