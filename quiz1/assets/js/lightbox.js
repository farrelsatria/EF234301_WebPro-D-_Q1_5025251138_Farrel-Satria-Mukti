document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModalBtn = document.getElementById('close-modal');

    const galleryImages = document.querySelectorAll('main img');

    galleryImages.forEach(img => {
        img.classList.add('cursor-pointer', 'hover:opacity-80', 'transition-opacity');

        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    const closeModal = () => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        modalImg.src = '';
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});