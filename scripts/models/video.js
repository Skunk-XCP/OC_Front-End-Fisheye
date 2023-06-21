class Video extends TypeMediaFactory {
    constructor(id, photographerId, title, likes, date, video) {
        super({id, photographerId, title, likes, date});
        this._video = video;
    }

    getImagePath() {
        return `assets/images/${this.photographerId}/${this.video}`;
    }
    
}