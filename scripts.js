document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close');
    const backButton = document.getElementById('back-button');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const heroImage = document.querySelector('.hero-image');

    // Función para abrir el modal con la imagen y texto correspondiente
    function openModal(imgSrc, text) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        modalText.textContent = text;
    }

    // Añadir evento de clic a la imagen de héroe
    heroImage.addEventListener('click', () => {
        openModal(heroImage.src, "Te amo mi enojona");
    });

    // Añadir evento de clic a cada imagen de la galería
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const imgSrc = image.src;
            const text = image.getAttribute('data-text');
            openModal(imgSrc, text);
        });
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    backButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Cerrar modal cuando se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});