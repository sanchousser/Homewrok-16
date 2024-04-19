document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.querySelector(".read-more-btn");
    const closeModalBtn = document.querySelector(".close-btn");
    const modal = document.querySelector("[data-modal-target]");

    openModalBtn.addEventListener("click", function() {
        modal.classList.remove("hidden-modal");
    });

    closeModalBtn.addEventListener("click", function() {
        modal.classList.add("hidden-modal");
    });
});
