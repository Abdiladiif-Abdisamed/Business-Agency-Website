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
  
