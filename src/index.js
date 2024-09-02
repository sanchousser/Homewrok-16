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


//<-------------- Section Products JS ----------->
// opens/closes modal window for products ingredients
 
const ingredientsButtons = document.querySelectorAll('.product-card-arrow-button');
const ingredientsBackdrop = document.querySelector('.modal-window-ingredients');

ingredientsButtons.forEach(button => {
  button.addEventListener('click', toggleIngredientsModal);
});

ingredientsBackdrop.addEventListener('click', (e) => {
  const closeButton = e.target.closest(".modal-close-button");
  const submitButton = e.target.closest(".modal-window-ingredients-submit-button");

  if (closeButton || submitButton) {
    toggleIngredientsModal();
  }
});

function toggleIngredientsModal() {
  ingredientsBackdrop.classList.toggle("is-open");
}