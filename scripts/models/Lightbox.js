class Lightbox {
    constructor(lightboxElement, galleryElements, mediaPhotographer, index) {
        this.lightboxElement = lightboxElement;
        this.galleryElements = galleryElements;
        this.mediaPhotographer = mediaPhotographer;
        this.currentElement = index;
    }

    show(media) {
        let lightboxContent = getLightbox(media);
        this.lightboxElement.appendChild(lightboxContent);
        this.lightboxElement.style.display = 'block';

        let nextButton = this.lightboxElement.querySelector('.next');
        nextButton.addEventListener('click', this.goToNext.bind(this));

    }

    goToNext() {
        if (this.currentElement < this.galleryElements.length - 1) {
            this.currentElement++;
            let newMedia = this.galleryElements[this.currentElement];

            this.updateContent(newMedia);
        }

    }

    previous() {

    }

    close() {

    }

}