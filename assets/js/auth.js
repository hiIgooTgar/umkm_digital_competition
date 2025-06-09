// Password visibility
const fieldPassword = document.getElementById("password_field");
const eyeIcon = document.querySelector(".eye-icon i");

eyeIcon.addEventListener("click", () => {
  const isHidden = fieldPassword.type === "password";
  fieldPassword.type = isHidden ? "text" : "password";
  eyeIcon.classList.toggle("fa-eye");
  eyeIcon.classList.toggle("fa-eye-slash");
});

// Slideshow
let slideIndex = 0;
const slides = Array.from(document.getElementsByClassName("slide-auth"));
const dots = Array.from(document.getElementsByClassName("dot"));
const totalSlides = slides.length;

function showSlides(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlides(slideIndex);
}

showSlides(slideIndex);
setInterval(nextSlide, 7000);
