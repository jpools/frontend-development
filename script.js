
// MET BEHULP VAN AI ""Help mij met het maken van een carousel met de volgende code..."//


// Get both carousels
const leeftijdenCarousel = document.querySelector('.leeftijden ul');
const productsCarousel = document.querySelector('.products-carousel ul');
const leeftijdenItems = leeftijdenCarousel.querySelectorAll('li');
const productItems = productsCarousel.querySelectorAll('li');

// Get carousel sections
const leeftijdenSection = document.querySelector('.leeftijden');
const productsSection = document.querySelector('.products-carousel');

// Get overlay elements for both carousels
const leeftijdenLeftOverlay = leeftijdenSection.querySelector('.carousel-overlay.left');
const leeftijdenRightOverlay = leeftijdenSection.querySelector('.carousel-overlay.right');
const productsLeftOverlay = productsSection.querySelector('.carousel-overlay.left');
const productsRightOverlay = productsSection.querySelector('.carousel-overlay.right');

// Function to update controls for a specific carousel
function updateCarouselControls(carousel, leftOverlay, rightOverlay) {
  if (!carousel || !leftOverlay || !rightOverlay) return;
  
  const scrolled = carousel.scrollLeft;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  // Update overlays
  leftOverlay.classList.toggle('visible', scrolled > 0);
  rightOverlay.classList.toggle('visible', scrolled < maxScroll - 1);
}

// Add scroll event listeners with debounce for both carousels
let leeftijdenScrollTimeout;
let productsScrollTimeout;

leeftijdenCarousel.addEventListener('scroll', () => {
  if (leeftijdenScrollTimeout) {
    window.cancelAnimationFrame(leeftijdenScrollTimeout);
  }
  leeftijdenScrollTimeout = window.requestAnimationFrame(() => {
    updateCarouselControls(leeftijdenCarousel, leeftijdenLeftOverlay, leeftijdenRightOverlay);
  });
});

productsCarousel.addEventListener('scroll', () => {
  if (productsScrollTimeout) {
    window.cancelAnimationFrame(productsScrollTimeout);
  }
  productsScrollTimeout = window.requestAnimationFrame(() => {
    updateCarouselControls(productsCarousel, productsLeftOverlay, productsRightOverlay);
  });
});

// Initialize controls visibility for both carousels
updateCarouselControls(leeftijdenCarousel, leeftijdenLeftOverlay, leeftijdenRightOverlay);
updateCarouselControls(productsCarousel, productsLeftOverlay, productsRightOverlay);

// Update controls on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
  if (resizeTimeout) {
    window.cancelAnimationFrame(resizeTimeout);
  }
  resizeTimeout = window.requestAnimationFrame(() => {
    updateCarouselControls(leeftijdenCarousel, leeftijdenLeftOverlay, leeftijdenRightOverlay);
    updateCarouselControls(productsCarousel, productsLeftOverlay, productsRightOverlay);
  });
});