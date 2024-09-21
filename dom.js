export function renderNewMessage(content, role) {
    const conversation = document.getElementById('conversation');
    const message = document.createElement('article');
    message.className = role + '-message';
    const p = document.createElement('p');
    p.textContent = content;
    message.appendChild(p);
    conversation.appendChild(message);
}

function scrollToBottom() {
    requestAnimationFrame(() => {
        document.body.scrollIntoView({ behavior: "smooth", block: "end" })
    });
}