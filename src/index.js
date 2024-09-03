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


button.addEventListener('click', toggleFranchiseModal);

franchiseBackdrop.addEventListener('click', e => {
  const target = e.target.closest('.modal-close-btn-contacts');
  if (!target) {
    return;
  }
  toggleFranchiseModal();
});


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
  const target = e.target.closest('.modal-close-btn-contacts');
  if (!target) {
    return;
  }
  toggleLocationModal();
});
function toggleLocationModal() {
  locationBackdrop.classList.toggle('is-open');
  document.querySelector('.contact-container').classList.toggle('opaq-bg');
  document
    .querySelector('.contact-container')
    .scrollIntoView({ behavior: 'smooth' });
}


//<--------------Customer Review JS----------->
document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;

  function updateSlide(index) {
    // Update active class on slides
    carouselItems.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });

    // Update active class on dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Change slide on dot click
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlide(currentIndex);
    });
  });

  // Initial setup to show the first slide
  updateSlide(currentIndex);
});

// About section JS
// opens modal window for read more button


const aboutButton = document.querySelector('.read-more-btn');
const aboutBackdrop = document.querySelector('.modal-box');
aboutButton.addEventListener('click', toggleModal);

aboutButton.addEventListener('click', function () {
  console.log(230924928);
});

aboutBackdrop.addEventListener('click', e => {
  const target = e.target.closest('.close-modal-box');
  if (!target) {
    return;
  }
  toggleModal();
});
function toggleModal() {
  aboutBackdrop.classList.toggle('is-open');
  document.querySelector('.about-container-box').classList.toggle('opaq-bg');
  document
    .querySelector('.about-container-box')
    .scrollIntoView({ behavior: 'smooth' });
}




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


