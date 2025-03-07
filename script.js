document.addEventListener('DOMContentLoaded', () => {
    // Landing page carousel
    function initLandingCarousel() {
        const container = document.querySelector('.carousel-container');
        if (!container) return;

        const images = container.querySelectorAll('.carousel-img');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        setInterval(nextImage, 1000);
    }

    // Vinyl carousel
    function initVinylCarousel() {
        const container = document.querySelector('.vinilos .carousel-container');
        if (!container) return;

        const images = container.querySelectorAll('.carousel-img');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 500);
    }

    // Initialize both carousels
    initLandingCarousel();
    initVinylCarousel();
}); 