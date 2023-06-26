class TypeMediaFactory {
    constructor(data) {
        if (data._image) {
            return new Image(data)
        }
        else if (data._video) {
            return new Video(data)
        }
        else {
            throw "unknown format"
        }
    }
}
