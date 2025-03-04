document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-img');
    let currentIndex = 0;

    // Función para mostrar la imagen actual
    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    // Función para la siguiente imagen
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Cambio automático de imágenes cada 1 segundo
    setInterval(nextImage, 1000);
}); 