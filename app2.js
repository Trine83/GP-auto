function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.classList.toggle("hidden");
  }
  
  // Få tilgang til HTML-elementene
  var messageInput = document.getElementById("message-input");
  var sendButton = document.getElementById("send-button");
  var chatMessages = document.getElementById("chat-messages");
  
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
    var message = messageInput.value;
    if (message.trim() !== "") {
      var newMessage = document.createElement("div");
      newMessage.classList.add("message");
  
      var avatar = document.createElement("img");
      avatar.classList.add("avatar");
      avatar.src = "Martin.png"; // Bytt ut med din avatar-bildelink
      newMessage.appendChild(avatar);
  
      var text = document.createElement("div");
      text.classList.add("text");
      text.innerHTML = '<a href="tel:+123456789">' + message + '</a>';
      newMessage.appendChild(text);
  
      chatMessages.appendChild(newMessage);
  
      messageInput.value = "";
      messageInput.focus();
    }
  }
  