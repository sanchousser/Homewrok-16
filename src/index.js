// Header hamburger menu

const menuButton = document.querySelector('.menu-open-btn');
const menuBackdrop = document.querySelector('.hamburger-menu');

menuButton.addEventListener('click', toggleMenu);

menuBackdrop.addEventListener('click', e => {
  const target = e.target.closest('.menu-close-btn');
  if (!target) {
    return;
  }
  toggleMenu();
});

function toggleMenu() {
  menuBackdrop.classList.toggle('is-open');
}

//opens Buy Now modal window for Buy button

const buyButton = document.querySelector('.buy-now-btn');
const buyBackdrop = document.querySelector('.modal-buy-now');

buyButton.addEventListener('click', toggleBuyModal);

buyBackdrop.addEventListener('click', e => {
  const target = e.target.closest('.menu-close-btn');
  if (!target) {
    return;
  }
  toggleBuyModal();
});

function toggleBuyModal() {
  buyBackdrop.classList.toggle('is-open');
}

// Section Contacts JS
// opens modal window for franchise button
const button = document.querySelector('.franchise-btn');
const franchiseBackdrop = document.querySelector('.franchise');
button.addEventListener('click', toggleFranchiseModal);
franchiseBackdrop.addEventListener('click', e => {
  const target = e.target.closest('.modal-close-btn-contacts');
const franchiseBackdrop = document.querySelector('.franchise');

button.addEventListener('click', toggleFranchiseModal);

franchiseBackdrop.addEventListener('click', e => {
  const target = e.target.closest('.modal-close-btn-contacts');
  if (!target) {
    return;
  }
  toggleFranchiseModal();
  toggleFranchiseModal();
});
function toggleFranchiseModal() {
  franchiseBackdrop.classList.toggle('is-open');
  document.querySelector('.contact-container').classList.toggle('opaq-bg');

function toggleFranchiseModal() {
  franchiseBackdrop.classList.toggle('is-open');
  document.querySelector('.contact-container').classList.toggle('opaq-bg');
  document
    .querySelector('.contact-container')
    .scrollIntoView({ behavior: 'smooth' });
}
// opens modal window for locations button
const locationBtn = document.querySelector('.location-btn');
const locationBackdrop = document.querySelector('.location');
locationBtn.addEventListener('click', toggleLocationModal);
locationBtn.addEventListener('click', function () {
  console.log(2000);
});
locationBackdrop.addEventListener('click', e => {
  const target = e.target.closest('.modal-close-btn-contacts-contacts');
  if (!target) {
    return;
  }
  toggleLocationModal();
});
function toggleLocationModal() {
  locationBackdrop.classList.toggle('is-open');
  document.querySelector('.contact-contact-container').classList.toggle('opaq-bg');
  document
    .querySelector('.contact-container')
    .scrollIntoView({ behavior: 'smooth' });
}
//<--------------Customer Review JS----------->
document.addEventListener('DOMContentLoaded', () => {
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');
  function showSlide(index) {
    // Hide all slides and deactivate dots
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    });
    // Show the selected slide and activate the dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }
  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }
  function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  }
  function goToSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
  }
  // Initialize the first slide
  showSlide(currentSlideIndex);
  // Assign event listeners to buttons
  document.querySelector('.prev-btn').addEventListener('click', prevSlide);
  document.querySelector('.next-btn').addEventListener('click', nextSlide);
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });
});
