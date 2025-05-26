window.addEventListener("scroll", function () {
  let navbarNav = document.querySelector(".navbar");
  navbarNav.classList.toggle("sticky-nav", window.scrollY > 0);
});
