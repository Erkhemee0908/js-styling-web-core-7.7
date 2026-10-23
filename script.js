const desktop = window.matchMedia("(min-width: 768px)");
let swiper = null;

function initSwiper() {
  swiper = new Swiper(".brands__slider", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".brands__pagination",
      clickable: true,
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
const expandButton = document.querySelector(".brands__expand-button");
const expandImage = document.querySelector(".brands__expand-image");
const expandText = document.querySelector(".brands__expand-text");

expandButton.addEventListener("click", () => {
  const isExpanded = brands.classList.toggle("brands--expanded");

  expandText.textContent = isExpanded ? "Hide" : "Show all";
  expandImage.src = isExpanded
    ? "assets/style-project__hide.svg"
    : "assets/style-project__expand.svg";
});
