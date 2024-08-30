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

