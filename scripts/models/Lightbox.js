class Lightbox {
    constructor(lightboxElement, galleryElements, mediaPhotographer, index) {
        this.lightboxElement = lightboxElement;
        this.galleryElements = galleryElements; // galerie
        this.mediaPhotographer = mediaPhotographer; // 1 media
        this.currentElement = index;
    }

    show() {
        this.lightboxElement.style.display = 'block';
        document.querySelector(".lightboxContent a").focus();

        // Media suivant
        let nextButton = this.lightboxElement.querySelector('.next');
        nextButton.addEventListener('click', this.goToNext.bind(this));

        // Media précédent
        let prevButton = this.lightboxElement.querySelector('.prev');
        prevButton.addEventListener('click', this.goToPrev.bind(this));

        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            e.stopPropagation();
            if (e.key === 'ArrowRight') {
                // Media suivant avec fleche
                this.goToNext();
            } else if (e.key === 'ArrowLeft') {
                // Media précédent avec fleche
                this.goToPrev();
            } else if (e.key === 'Escape') {
                // Fermeture lightbox avec Echap
                this.close();
            }
        });

        // Fermeture lightbox
        let closeLightbox = this.lightboxElement.querySelector('.closeLightbox');
        closeLightbox.addEventListener('click', this.close.bind(this));

        trapFocusIn(this.lightboxElement);

        // Annule le cursor pointer au survole de l'image
        let lightboxContent = this.lightboxElement.querySelector('.lightboxContent a');
        lightboxContent.style.cursor = 'default';

        // Evite d'ouvrir l'image dans un onglet au clic dans la lightbox
        let lightboxLink = this.lightboxElement.querySelector('.lightboxContent a');
        lightboxLink.addEventListener('click', function (event) {
            event.preventDefault();
        });
    }

    goToNext() {
        this.currentElement++;

        if (this.currentElement >= this.galleryElements.length) {
            this.currentElement = 0;
        }

        this.mediaPhotographer = this.galleryElements[this.currentElement];
        this.updateContent();

    }

    goToPrev() {
        this.currentElement--;

        if (this.currentElement < 0) {
            this.currentElement = this.galleryElements.length - 1;
        }

        this.mediaPhotographer = this.galleryElements[this.currentElement];
        this.updateContent();
    }

    close() {
        // supprime la lightbox du DOM
        this.lightboxElement.remove();
        document.body.classList.remove('lightbox-active');

        this.lightboxElement.removeEventListener('keydown', this.trapFocusIn);
    }

    updateContent() {
        const lightboxContent = this.lightboxElement.querySelector('.lightboxContent');
        const lightboxMedia = lightboxContent.querySelector('a');
        const lightboxTitle = lightboxContent.querySelector('.lightboxTitle');

        lightboxMedia.innerHTML = this.mediaPhotographer.getTypeOfMedia();
        lightboxTitle.textContent = this.mediaPhotographer.title;

    }

}
