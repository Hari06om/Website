const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navToggle = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

navOpenBtn.addEventListener("click", navToggle);
navCloseBtn.addEventListener("click", navToggle);
overlay.addEventListener("click", navToggle);
