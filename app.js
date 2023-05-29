function toggleChat() {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.classList.toggle("hidden");
  }

// Få tilgang til HTML-elementene
let messageInput = document.getElementById("message-input");
let sendButton = document.getElementById("send-button");
let chatMessages = document.getElementById("chat-messages");

// Lytt etter klikk på send-knappen
sendButton.addEventListener("click", sendMessage);

// Lytt etter Enter-tastetrykk i meldingsinndatafeltet
messageInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Funksjon for å sende meldingen
function sendMessage() {
  let message = messageInput.value;
  if (message.trim() !== "") {
    let newMessage = document.createElement("div");
    newMessage.classList.add("message");
    
    let avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = 'C4BAF164-F90D-4C1B-8C08-6B1041A7CE76.jpeg' ;
    newMessage.appendChild(avatar);
    
    let text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML = '<a href="tel:+4741073229">' + message + '</a>';
    newMessage.appendChild(text);
    
    chatMessages.appendChild(newMessage);
    
    messageInput.value = "";
    messageInput.focus();
  }
}


  
