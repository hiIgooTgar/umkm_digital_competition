// sticku navbar
let navbarNav = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  navbarNav.classList.toggle("sticky-nav", window.scrollY > 0);
});

// responsvive nav-menu
const navbarMenu = document.getElementById("nav-menu");
function hideMenuNav() {
  navbarMenu.style.right = "-100%";
}
function showMenuNav() {
  navbarMenu.style.right = "0";
}

// jika klik nav-list maka close menu
let navMenuList = document.querySelectorAll(".nav-list");
navMenuList.forEach(function (linkMenu) {
  linkMenu.addEventListener("click", () => {
    navbarMenu.style.right = "-100%";
  });
});

document.addEventListener("click", function (e) {
  if (
    navbarMenu.contains(e.target) &&
    !document.querySelector(".nav-menu .content").contains(e.target)
  ) {
    navbarMenu.style.right = "-100%";
  }
});

// scroll-up
window.addEventListener("scroll", function () {
  let scrollUp = document.querySelector(".scroll-up");
  scrollUp.classList.toggle("sticky-scroll-up", window.scrollY > 0);
});

// scroll infinite
const rowTestimonials = document.querySelector(".row-testimonials");
rowTestimonials.innerHTML += rowTestimonials.innerHTML;

// copyright
document.querySelector("#year_copyright").innerHTML = new Date().getFullYear();

// scrollX Categories
const scrollXCateory = document.getElementById("category-scroll");
const btnCategoryLeft = document.querySelector(".left-paginate");
const btnCategoryRight = document.querySelector(".right-paginate");

btnCategoryLeft.addEventListener("click", () => {
  scrollXCateory.scrollBy({ left: -200, behavior: "smooth" });
});

btnCategoryRight.addEventListener("click", () => {
  scrollXCateory.scrollBy({ left: 200, behavior: "smooth" });
});
