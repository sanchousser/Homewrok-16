(() => {
  const refs = {
    openSellerModalBtn: document.querySelector('[data-modal-seller-open]'),
    openSellerModalBtnDsk: document.querySelector('[data-modal-seller-open-dsk]'),
    closeSellerModalBtn: document.querySelector('[data-modal-seller-close]'),
    closeSellerModalBtnDsk: document.querySelector('[data-modal-seller-close-dsk]'),
    sellerModal: document.querySelector('[data-modal-seller]'),
  };

  refs.openSellerModalBtn.addEventListener('click', toggleModal);
  refs.openSellerModalBtnDsk.addEventListener('click', toggleModal);
  refs.closeSellerModalBtn.addEventListener('click', toggleModal);
  refs.closeSellerModalBtnDsk.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.sellerModal.classList.toggle('is-hidden');
  }
})();

/*Header menu*/
// (() => {
//   const mobileMenu = document.querySelector('[js-menu-container-header]');
//   const openMenuBtn = document.querySelector('[js-open-menu-header]');
//   const closeMenuBtn = document.querySelector('.js-close-menu-header');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
// // image overlay video
// document.querySelector('img').addEventListener('click', function() {
//   this.className = 'active';
//   document.querySelector('iframe').src += '?autoplay=1';
// });