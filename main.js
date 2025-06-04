// Hero Slider

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
let slideInterval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetTimer();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    resetTimer();
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}




// Mobile Menu Bar

const hamburger = document.querySelector('.humburger');
const mobileMenu = document.querySelector(".mobile-menu");
const icons = document.querySelectorAll("i");

hamburger.addEventListener("click", function (event) {
    const isVisible = mobileMenu.getAttribute('data-visible');
    if (isVisible == "true") {
        // qari hiding
        mobileMenu.setAttribute('data-visible', "false");
        icons[0].setAttribute('data-visible', "true");
        icons[1].setAttribute('data-visible', "false");
    } else if (isVisible == "false") {
        // soo bandhig showing
        mobileMenu.setAttribute('data-visible', "true");
        icons[0].setAttribute('data-visible', "false");
        icons[1].setAttribute('data-visible', "true");
    }
});           



document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// cookie
document.addEventListener("DOMContentLoaded", () => {
    const coockieContainer = document.querySelector(".coockie-container");
    const contactCookie = document.querySelector(".contactCookie");
    const ASTeamCookie = document.querySelector(".ASTeamCookie");
    const AsTeam = document.querySelector(".AsTeam");
    const Asindv= document.querySelector(".indv");
    const times = document.querySelectorAll(".times");
    const button = document.querySelector(".btn");
    const ASind = document.querySelector(".ASind")
    const abdiladiif = document.querySelector(".abdiladiif")
    const abdiInfo = document.querySelector(".abdiInfo")
    const naima = document.querySelector(".naima")
    const naimaInfo = document.querySelector(".naimaInfo")
  
  
    setTimeout(() => {
      coockieContainer.style.display = "block";
    }, 1000);
  times.forEach((time) => {
      time.addEventListener("click", () => {
        coockieContainer.style.display = "none";
        naimaInfo.style.display = "none";
        ASind.style.display = "none";
        ASTeamCookie.style.display = "none";
        coockieContainer.style.display = "none";
        contactCookie.style.display = "none";
        alert("Thanks for your feedback");
      });
    });
    
  
    button.addEventListener("click", () => {
      contactCookie.style.display = "flex";
      coockieContainer.style.display = "none";
     
    });
  
    AsTeam.addEventListener("click", () => {
      ASTeamCookie.style.display = "flex";
      coockieContainer.style.display = "none";
      contactCookie.style.display = "none";
     
    });
  
    Asindv.addEventListener("click", ()=>{
      ASind.style.display = "flex";
      ASTeamCookie.style.display = "none";
      coockieContainer.style.display = "none";
      contactCookie.style.display = "none";
  
    })
  
    abdiladiif.addEventListener("click",()=>{
      abdiInfo.style.display = "flex";
      ASind.style.display = "none";
      ASTeamCookie.style.display = "none";
      coockieContainer.style.display = "none";
      contactCookie.style.display = "none";
    })
    naima.addEventListener("click",()=>{
      naimaInfo.style.display = "flex";
      ASind.style.display = "none";
      ASTeamCookie.style.display = "none";
      coockieContainer.style.display = "none";
      contactCookie.style.display = "none";
    })
  });
  
// chatbot
// Initialize local storage history
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];

// Display chat history from local storage
function displayHistory() {
    const chatHistoryDiv = document.getElementById('chat-history');
    chatHistoryDiv.innerHTML = "";
    chatHistory.forEach(chat => {
        const chatMessage = document.createElement('div');
        chatMessage.classList.add('chat-message');
        chatMessage.innerHTML = `<strong>${chat.sender}</strong>: ${chat.message}`;
        chatHistoryDiv.appendChild(chatMessage);
    });
}

// Open and close the chatbot
document.getElementById('chatbot-icon').addEventListener('click', () => {
    document.getElementById('chatbot-popup').style.display = 'flex';
    displayHistory();
});

document.getElementById('close-chat').addEventListener('click', () => {
    document.getElementById('chatbot-popup').style.display = 'none';
});

// Handle sending messages
document.getElementById('send-message').addEventListener('click', async () => {
    const userMessage = document.getElementById('user-input').value;
    if (userMessage.trim() !== "") {
        // Display user message
        chatHistory.push({ sender: 'You', message: userMessage });
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));

        // Clear the input field
        document.getElementById('user-input').value = "";

        // Display history
        displayHistory();

        // Call the Google Gemini API for response (replace with actual API call)
        const chatbotResponse = await getChatbotResponse(userMessage);

        // Display chatbot response
        chatHistory.push({ sender: 'Chatbot', message: chatbotResponse });
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
        displayHistory();
    }
});

// Handle Clear History button
document.getElementById('clear-history').addEventListener('click', () => {
    localStorage.removeItem('chatHistory');
    chatHistory = [];  // Clear the chat history array
    displayHistory();
});

// Handle greetings
const greetings = ['hello', 'hi', 'hey', 'greetings'];

// Function to fetch response from Google Gemini API
async function getChatbotResponse(userMessage) {
    if (greetings.some(greeting => userMessage.toLowerCase().includes(greeting))) {
        return "Hi, I'm AbdiladiifDEV, your AI chatbot. I can assist you with business consulting!";
    }

    // Call Google Gemini API for non-greeting queries
    return await fetchGoogleGeminiAPI(userMessage);
}

// Function to fetch response from Google Gemini API
async function fetchGoogleGeminiAPI(userMessage) {
    try {
        // Make a POST request to the Gemini API with the user message
        const response = await fetch('AIzaSyDppY9LZVQW7UtACpE4qNO9-51YN1AmrZ0', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY' // Replace with your actual API key
            },
            body: JSON.stringify({
                message: userMessage, // Send user query as a message
            })
        });

        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();

        // Return the response from the API
        return data.reply || 'Sorry, I didn\'t quite understand that. Can you rephrase?';
    } catch (error) {
        console.error('API Request Failed:', error);
        return 'Sorry, something went wrong. Please try again later.';
    }
}
