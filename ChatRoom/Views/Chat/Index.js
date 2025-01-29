document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        sendMessage();
    });

    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'user');
            messageElement.textContent = messageText;
            chatMessages.appendChild(messageElement);
            messageInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // يمكنك هنا إضافة كود لإرسال الرسالة إلى الخادم أو أي مكان آخر
        }
    }

    // دالة لإضافة رسائل وهمية (للتجربة)
    function addSampleMessages() {
        const sampleMessages = [
            'مرحبًا!',
            'كيف حالك؟',
            'هل يمكنك مساعدتي؟'
        ];

        sampleMessages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
        });

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // إضافة رسائل وهمية عند تحميل الصفحة
    addSampleMessages();
});