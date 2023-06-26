
class Image extends Media {
    constructor(data) {
        super(data);
        this._image = data._image;
    }

    getPath() {
        return `assets/images/${this._photographerId}/${this._image}`;
    }

    getTypeOfMedia() {
        return `<img src="${this.getPath()}" alt="${this._title}">`;
    }

}
