function init() {
    let chatContainer = document.querySelector(".chat-wrapper");
    let chatToggle = document.querySelector(".chat-toggle");
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('hidden');
    })
}

init();


  
