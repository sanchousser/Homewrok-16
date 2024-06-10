(() => {
  const mobileMenu = document.querySelector('.js-menu-container-header');
  const openMenuBtn = document.querySelector('.js-open-menu-header');
  const closeMenuBtn = document.querySelector('.js-close-menu-header');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open-header');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open-header');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-review-open]'),
    closeModalBtn: document.querySelector('[data-modal-review-close]'),
    modal: document.querySelector('[data-modal-review]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-subscribe-open]'),
    closeModalBtn: document.querySelector('[data-modal-subscribe-close]'),
    modal: document.querySelector('[data-modal-subscribe]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// Top Sellers modal
const refs = {
  openSellerModalBtn: document.querySelector('[data-modal-seller-open]'),
  openSellerModalBtnTab: document.querySelector('[data-modal-seller-open-tab]'),
  openSellerModalBtnDsk: document.querySelector('[data-modal-seller-open-dsk]'),
  openSellerModalBtnHhDsk: document.querySelector(
    '[data-modal-seller-open-hh-dsk]'
  ),
  openSellerModalBtnHhTab: document.querySelector(
    '[data-modal-seller-open-hh-tab]'
  ),
  openSellerModalBtnHh: document.querySelector('[data-modal-seller-open-hh]'),
  closeSellerModalBtn: document.querySelector('[data-modal-seller-close]'),
  sellerModal: document.querySelector('[data-modal-seller]'),
};

refs.openSellerModalBtn.addEventListener('click', toggleModal);
refs.openSellerModalBtnTab.addEventListener('click', toggleModal);
refs.openSellerModalBtnHhDsk.addEventListener('click', toggleModal);
refs.openSellerModalBtnHhTab.addEventListener('click', toggleModal);
refs.openSellerModalBtnHh.addEventListener('click', toggleModal);
refs.openSellerModalBtnDsk.addEventListener('click', toggleModal);
refs.closeSellerModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.sellerModal.classList.toggle('is-hidden');
}

// image overlay video
// document.querySelector('img').addEventListener('click', ()=> {
//   this.className = 'active';
//   document.querySelector('iframe').src += '?autoplay=1';
// });
