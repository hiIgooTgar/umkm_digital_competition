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

document.addEventListener("click", function (e) {
  if (
    navbarMenu.contains(e.target) &&
    !document.querySelector(".nav-menu .content").contains(e.target)
  ) {
    navbarMenu.style.right = "-100%";
  }
});

// Submenu toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".toggle-submenu");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      const parent = this.parentElement;
      const submenu = parent.querySelector(".submenu");
      document
        .querySelectorAll(".nav-item.has-submenu .submenu")
        .forEach(function (el) {
          if (el !== submenu) {
            el.classList.remove("show");
          }
        });

      submenu.classList.toggle("show");
      const icon = this.querySelector("i");
      document.querySelectorAll(".toggle-submenu i").forEach((i) => {
        if (i !== icon) i.classList.remove("rotate-navbar");
      });
      icon.classList.toggle("rotate-navbar");
    });
  });

  document.addEventListener("click", function (e) {
    const isClickInsideNav = e.target.closest(".has-submenu");
    if (!isClickInsideNav) {
      document.querySelectorAll(".submenu").forEach(function (el) {
        el.classList.remove("show");
      });
      document.querySelectorAll(".toggle-submenu i").forEach(function (i) {
        i.classList.remove("rotate-navbar");
      });
    }
  });
});

// scroll-up
window.addEventListener("scroll", function () {
  let scrollUp = document.querySelector(".scroll-up");
  scrollUp.classList.toggle("sticky-scroll-up", window.scrollY > 0);
});

// scroll infinite
const rowTestimonials = document.querySelector(".row-testimonials");
rowTestimonials.innerHTML += rowTestimonials.innerHTML;

// round-up
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count-comfort");
  const speed = 150;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace(/\D/g, "");
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = (count + increment).toLocaleString() + "+";
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString() + "+";
      }
    };

    updateCount();
  });
});

// search product and search by categories list product
const products = document.querySelectorAll(".col-product");
const noResult = document.querySelector(".no-result-product");
const searchInput = document.getElementById("search");
const categoryItems = document.querySelectorAll(
  "#category-scroll .category-list"
);

let currentKeyword = "";
let currentCategory = "Semua Kategori";

function filterProducts() {
  let matchCount = 0;

  products.forEach((product) => {
    const span =
      product.querySelector(".d-desc span")?.innerText.toLowerCase() || "";
    const title =
      product.querySelector(".d-desc .title")?.innerText.toLowerCase() || "";
    const price =
      product.querySelector(".d-desc .price")?.innerText.toLowerCase() || "";
    const productCategory = product.getAttribute("data-category");

    const matchKeyword =
      span.includes(currentKeyword) ||
      title.includes(currentKeyword) ||
      price.includes(currentKeyword);

    const matchCategory =
      currentCategory === "Semua Kategori" ||
      productCategory === currentCategory;

    const isMatch = matchKeyword && matchCategory;

    product.style.display = isMatch ? "block" : "none";
    if (isMatch) matchCount++;
  });

  noResult.style.display = matchCount === 0 ? "block" : "none";
}

searchInput.addEventListener("input", function () {
  currentKeyword = this.value.toLowerCase();
  filterProducts();
});

categoryItems.forEach((item) => {
  item.addEventListener("click", () => {
    categoryItems.forEach((i) => i.classList.remove("active-category"));
    item.classList.add("active-category");

    currentCategory = item.textContent.trim();
    filterProducts();
  });
});

// description product
document.querySelectorAll(".d-desc p").forEach((paragraph) => {
  const words = paragraph.innerText.trim().split(/\s+/);
  if (words.length > 20) {
    const truncated = words.slice(0, 20).join(" ") + " ....";
    paragraph.innerText = truncated;
  }
});

// description blogs
document.querySelectorAll(".d-blogs p").forEach((paragraph) => {
  const words = paragraph.innerText.trim().split(/\s+/);
  if (words.length > 19) {
    const truncated = words.slice(0, 19).join(" ") + " ....";
    paragraph.innerText = truncated;
  }
});

// copyright
document.querySelector("#year_copyright").innerHTML = new Date().getFullYear();

// search team
document.addEventListener("DOMContentLoaded", function () {
  const artisans = document.querySelectorAll(".box-artisan");
  const noResultTeam = document.querySelector(".no-result-team");
  const searchInputTeam = document.getElementById("search_team");
  const countDisplay = document.querySelector(".header-title .count h5");

  function filterTeam(keyword) {
    let matchCount = 0;

    artisans.forEach((artisan) => {
      const position = artisan.querySelector("#position")
        ? artisan.querySelector("#position").innerText.toLowerCase()
        : "";
      const name = artisan.querySelector("h4")
        ? artisan.querySelector("h4").innerText.toLowerCase()
        : "";
      const isMatch = position.includes(keyword) || name.includes(keyword);

      artisan.style.display = isMatch ? "flex" : "none";
      if (isMatch) matchCount++;
    });

    if (noResultTeam) {
      noResultTeam.style.display = matchCount === 0 ? "block" : "none";
    }

    if (countDisplay) {
      countDisplay.innerText = matchCount;
    }
  }

  searchInputTeam.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    filterTeam(keyword);
  });
});

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
    "./assets/images/hero/anyaman-1.webp",
    "./assets/images/hero/anyaman-2.webp",
    "./assets/images/hero/anyaman-3.jpg",
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
