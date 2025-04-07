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


