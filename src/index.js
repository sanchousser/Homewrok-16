
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
function toggleModal() {
  refs.sellerModal.classList.toggle('is-hidden');
}
const refs = {
  openSellerModalBtn: document.querySelector('[data-modal-seller-open]'),
  openSellerModalBtnTab: document.querySelector('[data-modal-seller-open-tab]'),
  openSellerModalBtnDsk: document.querySelector('[data-modal-seller-open-dsk]'),
  closeSellerModalBtn: document.querySelector('[data-modal-seller-close]'),
  sellerModal: document.querySelector('[data-modal-seller]'),
  sellerModalHh: document.querySelector('[data-modal-seller-hh]'),
};

refs.openSellerModalBtn.addEventListener('click', toggleModal);
refs.openSellerModalBtnTab.addEventListener('click', toggleModal);
refs.openSellerModalBtnDsk.addEventListener('click', toggleModal);
refs.closeSellerModalBtn.addEventListener('click', toggleModal);



// image overlay video
// document.querySelector('img').addEventListener('click', ()=> {
//   this.className = 'active';
//   document.querySelector('iframe').src += '?autoplay=1';
// });
