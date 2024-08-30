//<--------------Customer Review JS----------->

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index >= slides.length) currentSlideIndex = 0;
  if (index < 0) currentSlideIndex = slides.length - 1;

  // Adjust slide position using translateX
  const slideWidth = 100;
  slides[0].parentNode.style.transform = `translateX(-${currentSlideIndex * slideWidth}%)`;

  // Update dots
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlideIndex));
}

function currentSlide(index) {
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
}

// Initial display
showSlide(currentSlideIndex);