class Lightbox {
    constructor(lightboxElement, galleryElements, mediaPhotographer, index) {
        this.lightboxElement = lightboxElement;
        this.galleryElements = galleryElements;
        this.mediaPhotographer = mediaPhotographer;
        this.currentElement = index;
    }

    show() {
        this.lightboxElement.style.display = 'block';

        let nextButton = this.lightboxElement.querySelector('.next');
        nextButton.addEventListener('click', this.goToNext.bind(this));

    }

    goToNext() {
        this.currentElement = (this.currentElement + 1) % this.mediaPhotographer.length;
        this.updateContent();

    }

    previous() {

    }

    close() {

    }

    updateContent() {
        this.lightboxElement.innerHTML = generateInnerHtmlLightBox(this.mediaPhotographer);
    }


    // updateContent(newMedia) {
    //     // Supprime le contenu actuel de la lightbox
    //     while (this.lightboxElement.firstChild) {
    //         this.lightboxElement.removeChild(this.lightboxElement.firstChild);
    //     }
    
    //     let newContent = getLightbox(newMedia);
    
    //     this.lightboxElement.appendChild(newContent);
    
    //     let nextButton = this.lightboxElement.querySelector('.next');
    //     nextButton.addEventListener('click', this.goToNext.bind(this));
    
    // }

}