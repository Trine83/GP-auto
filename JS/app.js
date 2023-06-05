function init() {
    let chatContainer = document.querySelector(".chat-wrapper");
    let chatToggle = document.querySelector(".chat-toggle");
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('hidden');
    })
}

init();


  
let slides = document.getElementsByClassName("slide");
let currentSlide = 0;

// Vis den første lysbildet
slides[currentSlide].style.display = "block";

// Funksjon for å bytte lysbildet
function nextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

// Bytt lysbildet hvert 3. sekund
setInterval(nextSlide, 3000);
