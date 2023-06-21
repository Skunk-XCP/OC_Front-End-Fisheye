class Image extends TypeMediaFactory {
    constructor(id, photographerId, title, likes, date, image) {
        super({id, photographerId, title, likes, date});
        this._image = image;
    }

    getImagePath() {
        return `assets/images/${this.photographerId}/${this.image}`;
    }
    
}
