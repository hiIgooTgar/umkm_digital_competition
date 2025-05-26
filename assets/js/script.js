window.addEventListener("scroll", function () {
  let navbarNav = document.querySelector(".navbar");
  navbarNav.classList.toggle("sticky-nav", window.scrollY > 0);
});

// scroll infinite
const rowTestimonials = document.querySelector(".row-testimonials");
rowTestimonials.innerHTML += rowTestimonials.innerHTML;
