const fieldPassword = document.getElementById("password_field");
const eyePassword = document.querySelector(".eye-icon i");

eyePassword.addEventListener("click", function () {
  if (fieldPassword.type == "password") {
    fieldPassword.type = "text";
    eyePassword.classList.remove("fa-eye-slash");
    eyePassword.classList.add("fa-eye");
  } else {
    fieldPassword.type = "password";
    eyePassword.classList.add("fa-eye-slash");
    eyePassword.classList.remove("fa-eye");
  }
});

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-auth");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    sli;
    deIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

setInterval(() => {
  plusSlides(1);
}, 7000);
