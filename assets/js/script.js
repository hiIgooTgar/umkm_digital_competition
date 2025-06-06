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

// accordion faq
const items = document.querySelectorAll(".accordion-row button");

items.forEach((item) => {
  item.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";

    // Tutup semua item terlebih dahulu
    items.forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.closest(".accordion-item").removeAttribute("data-expanded");
    });

    // Jika item sebelumnya tidak terbuka, buka yang diklik
    if (!isExpanded) {
      this.setAttribute("aria-expanded", "true");
      this.closest(".accordion-item").setAttribute("data-expanded", "true");
    }
  });
});

// active menu nav every section
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list");

function scrollTracker() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active-menu");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active-menu");
        }
      });
    }
  });
}

window.addEventListener("scroll", scrollTracker);

// beranda change photo every 30 seconds
document.addEventListener("DOMContentLoaded", function () {
  const heroBg = document.querySelector(".hero-bg");
  const images = [
    "./assets/images/auth/gambar-produk-1.png",
    "./assets/images/auth/gambar-produk-2.png",
    "./assets/images/auth/gambar-produk-3.png",
  ];

  let current = 0;
  function changeBackground() {
    heroBg.style.opacity = 0;
    setTimeout(() => {
      current = (current + 1) % images.length;
      heroBg.style.backgroundImage = `
        linear-gradient(
          rgba(255, 255, 255, 0.85),
          rgba(255, 255, 255, 0.85),
          rgba(255, 255, 255, 0.8),
          rgba(0, 150, 136, 0.7)
        ), url("${images[current]}")
      `;

      heroBg.style.opacity = 1;
    }, 700);
  }

  setInterval(changeBackground, 30000);
});
