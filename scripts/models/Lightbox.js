class Lightbox {
    constructor(lightboxElement, galleryElements, mediaPhotographer, index) {
        this.lightboxElement = lightboxElement;
        this.galleryElements = galleryElements; // galerie
        this.mediaPhotographer = mediaPhotographer; // 1 media
        this.currentElement = index;
    }

    show() {
        this.lightboxElement.style.display = 'block';

        // Media suivant
        let nextButton = this.lightboxElement.querySelector('.next');
        nextButton.addEventListener('click', this.goToNext.bind(this));

        // Media précédent
        let prevButton = this.lightboxElement.querySelector('.prev');
        prevButton.addEventListener('click', this.goToPrev.bind(this));

        // Fermeture lightbox
        let closeLightbox = this.lightboxElement.querySelector('.closeLightbox');
        closeLightbox.addEventListener('click', this.close.bind(this));

        // Annule le cursor pointer au survole de l'image
        let lightboxContent = this.lightboxElement.querySelector('.lightboxContent a');
        lightboxContent.style.cursor = 'default';

        // Evite d'ouvrir l'image dans un onglet au clic dans la lightbox
        let lightboxLink = this.lightboxElement.querySelector('.lightboxContent a');
            lightboxLink.addEventListener('click', function(event){
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
        this.lightboxElement.style.display = 'none';
        document.body.classList.remove('lightbox-active');
    }

    updateContent() {
        const lightboxContent = this.lightboxElement.querySelector('.lightboxContent');
        const lightboxMedia = lightboxContent.querySelector('a');
        const lightboxTitle = lightboxContent.querySelector('.lightboxTitle');

        lightboxMedia.innerHTML = this.mediaPhotographer.getTypeOfMedia();
        lightboxTitle.textContent = this.mediaPhotographer.title;

    }

}
