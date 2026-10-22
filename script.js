const desktop = window.matchMedia("(min-width: 768px)");
let swiper = null;

function initSwiper() {
  swiper = new Swiper(".brands__slider", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".brands__pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 9,
    },
  });
}

function toggleSwiper() {
  if (desktop.matches) {
    // 768px and wider: turn the slider off
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  } else if (!swiper) {
    // below 768px: turn the slider on
    initSwiper();
  }
}

toggleSwiper();
desktop.addEventListener("change", toggleSwiper);

// Expand button functionality

const brands = document.querySelector(".brands");
const expandButtons = document.querySelectorAll(".brands__expand-button");

expandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    brands.classList.toggle("brands--expanded");
  });
});
