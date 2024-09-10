document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-btn');
    const closeButton = document.querySelector('.menu-close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    // Open menu
    menuButton.addEventListener('click', function () {
      mobileMenu.classList.add('is-open');
    });
  
    // Close menu
    closeButton.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
    });
  });
  