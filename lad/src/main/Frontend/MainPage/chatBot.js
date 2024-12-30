// Get references to elements
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotPopup = document.getElementById('chatbot-popup');
const closeChatbot = document.getElementById('close-chatbot');
const sendMessage = document.getElementById('send-message');
const userInput = document.getElementById('user-input');
const chatbotMessages = document.querySelector('.chatbot-messages');

document.addEventListener('DOMContentLoaded', () => {
    const chatbotBtn = document.getElementById('chatbot-btn');
    const chatbotPopup = document.getElementById('chatbot-popup');
    const closeBtn = document.querySelector('.close-chatbot');

    chatbotBtn.addEventListener('click', () => {
        chatbotPopup.style.display = 'flex';
        chatbotBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        chatbotPopup.style.display = 'none';
        chatbotBtn.style.display = 'block';
    });
});

// Handle sending a message
sendMessage.addEventListener('click', () => {
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Add user's message
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('chatbot-message', 'user');
        userMessageElement.textContent = userMessage;
        chatbotMessages.appendChild(userMessageElement);

        // Add bot's response
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('chatbot-message', 'bot');
        botMessageElement.textContent = 'Thank you for your message! We will get back to you soon.';
        chatbotMessages.appendChild(botMessageElement);

        // Scroll to the bottom of the chat
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        // Clear input field
        userInput.value = '';
    }
});
