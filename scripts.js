/* scripts.js */
// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const nav = document.querySelector(".nav");
const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", () => nav.classList.toggle("nav--open"));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Carousel functionality
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-control.prev");
const nextBtn = document.querySelector(".carousel-control.next");
let currentIndex = 0;
const totalItems = carouselItems.length;
function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

// Download button handlers
const googlePlayBtn = document.getElementById("googlePlayBtn");
const appStoreBtn = document.getElementById("appStoreBtn");
const googlePlayBtn1 = document.getElementById("googlePlayBtn1");
const appStoreBtn1 = document.getElementById("appStoreBtn1");
googlePlayBtn.addEventListener("click", async function (e) {
  e.preventDefault();

  var link = await fetch(
    "https://script.google.com/macros/s/AKfycbyuLAz1VLFSTC1l8QFF1VfmRXjrO02nQbE6_Jh_UKMW_DPGC2qgj5Oo26MY88knAYIT/exec"
  );
  window.location.href = await link.text();
});
appStoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Playbox will be available on the App Store soon!");
});
googlePlayBtn1.addEventListener("click", async function (e) {
  e.preventDefault();

  var link = await fetch(
    "https://script.google.com/macros/s/AKfycbyuLAz1VLFSTC1l8QFF1VfmRXjrO02nQbE6_Jh_UKMW_DPGC2qgj5Oo26MY88knAYIT/exec"
  );
  window.location.href = await link.text();
});
appStoreBtn1.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Playbox will be available on the App Store soon!");
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});
