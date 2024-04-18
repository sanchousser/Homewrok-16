document.addEventListener('DOMContentLoaded', function () {
  const refs = {
    openModalBtn: document.getElementById('data-modal-open'),
    closeModalBtn: document.getElementById('data-modal-close'),
    modal: document.getElementById('data-modal'),
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    if (refs.modal) {
      refs.modal.classList.toggle('is-hidden-about');
    }
  }
});
