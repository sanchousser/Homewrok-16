
export function rotateReviewsListSection() {
    function rotateReviews() {
        const reviewsList = document.querySelector('.reviews-list');
        const firstItem = reviewsList.firstElementChild;
        reviewsList.appendChild(firstItem);
    }

    function shouldRotateReviews() {
        return window.innerWidth <= 1279;
    }

    // Store initial order of reviews
    const initialReviewsOrder = Array.from(
        document.querySelectorAll('.reviews-list li')
    );

    // Initial rotation
    rotateReviews();

    window.addEventListener('resize', function () {
        const reviewsList = document.querySelector('.reviews-list');

        if (shouldRotateReviews()) {
            rotateReviews();
        } else {
            reviewsList.innerHTML = '';
            initialReviewsOrder.forEach(function (item) {
                reviewsList.appendChild(item);
            });
        }
    });

    setInterval(function () {
        if (shouldRotateReviews()) {
            rotateReviews();
        }
    }, 5000);
}
