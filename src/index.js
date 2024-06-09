const refs = {
  openSellerModalBtn: document.querySelector('[data-modal-seller-open]'),
  openSellerModalBtnTab: document.querySelector('[data-modal-seller-open-tab]'),
  openSellerModalBtnDsk: document.querySelector('[data-modal-seller-open-dsk]'),
  closeSellerModalBtn: document.querySelector('[data-modal-seller-close]'),
  sellerModal: document.querySelector('[data-modal-seller]'),
};

refs.openSellerModalBtn.addEventListener('click', toggleModal);
refs.openSellerModalBtnTab.addEventListener('click', toggleModal);
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
