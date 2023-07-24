class Video extends Media {
    constructor(data) {
        super(data);
        this._video = data._video;
    }

    getPath() {
        return `assets/images/${this._photographerId}/${this._video}`;
    }

    getTypeOfMedia() {
        return `<video src="${this.getPath()}" aria-label="${this._title}" controls poster=""></video>`;
    }

}