document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('our-locations-button');
  const closeModalBtn = document.getElementById('close-btn');
  const modal = document.getElementById('modal');

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }
});
