const header = document.querySelector("header");
const menuOverlay = document.querySelector(".menu-overlay");
const menuOpenBtn = document.querySelector(".ham-barger-icon");
const menuCloseBtn = document.querySelector(".menu-close-btn");
function toggleMenu() {
  header.classList.toggle("opened");
}

menuCloseBtn.addEventListener("click", () => toggleMenu());
menuOpenBtn.addEventListener("click", () => toggleMenu());
menuOverlay.addEventListener("click", () => toggleMenu());
