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
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
          dots[i].classList.add('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    function currentSlide(index) {
      currentSlide = index;
      showSlide(currentSlide);
    }

    // Initialize the first slide
    showSlide(currentSlide);

    // Assign event listeners to buttons
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => currentSlide(index));
    });
  });