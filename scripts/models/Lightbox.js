class Lightbox {
    constructor(lightboxElement, ) {
        this.lightboxElement = lightboxElement;
        this.currentElement = null;
    }

    show() {
        this.lightboxElement.style.display = 'block';
    }

    next() {
        let index = this.lightboxElement.findIndex(element => element.getPath() == this.currentElement.getPath());
        this.currentElement = this.lightboxElement[index + 1];
    }

    previous() {

    }

    manageEvent() {

    }

}