// Section Contacts JS
// opens modal window for franchise button

const button = document.querySelector('.franchise-btn');
const backdrop = document.querySelector('.franchise');

button.addEventListener('click', toggleModal);
button.addEventListener('click', function () {
  console.log(13);
});

backdrop.addEventListener('click', e => {
  const target = e.target.closest('.modal-close-btn');
  if (!target) {
    return;
  }
  toggleModal();
});

function toggleModal() {
  backdrop.classList.toggle('is-open');
  document.querySelector('.container').classList.toggle('opaq-bg');
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
  const target = e.target.closest('.modal-close-btn');
  if (!target) {
    return;
  }
  toggleLocationModal();
});

function toggleLocationModal() {
  locationBackdrop.classList.toggle('is-open');
  document.querySelector('.container').classList.toggle('opaq-bg');
  document
    .querySelector('.contact-container')
    .scrollIntoView({ behavior: 'smooth' });
}


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

