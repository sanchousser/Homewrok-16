(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-seller-open]"),
      closeModalBtn: document.querySelector("[data-modal-seller-close]"),
      modal: document.querySelector("[data-modal-seller]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
  