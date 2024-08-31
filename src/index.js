const button = document.querySelector(".read-more-btn");
const backdrop = document.querySelector(".modal-box");

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".close-modal-box");

  if (!target) {
    return;
  }
  toggleModal();
});

function toggleModal() {
  backdrop.classList.toggle("is-open");
}