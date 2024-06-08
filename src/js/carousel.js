// Script pentru carousel - NU Functioneaza. Trebuie adaugat codul in fiecare fisier htm din partial

(() => {
    let currentIndex = 0;

    function scrollCarousel(direction) {
        const carousel = document.querySelector('.product-list');
        const itemWidth = carousel.querySelector('.product-item').offsetWidth + 20; // including margin
        currentIndex += direction;

        // Prevent scrolling beyond the list
        const maxIndex = carousel.children.length - 8; // Show 4 items at a time
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        carousel.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth',
        });

        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.carousel-indicators .dot');
        dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
        });
        }

    function goToSlide(index) {
        const carousel = document.querySelector('.product-list');
        const itemWidth = carousel.querySelector('.product-item').offsetWidth + 20; // including margin
        currentIndex = index;

        carousel.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth',
        });

        updateDots();
    }

  // Initialize the first dot as active
    document.addEventListener('DOMContentLoaded', () => {
    updateDots();
    });
})();
