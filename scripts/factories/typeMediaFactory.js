class TypeMediaFactory {
    constructor(data) {
        if (data.image) {
            return new Image(data)
        }
        else if (data.video) {
            return new Video(data)
        }
        else {
            throw "unknown format"
        }
    }
}
