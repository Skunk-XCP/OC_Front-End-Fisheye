class TypeMediaFactory {
    constructor(data) {
        if (data.image) {
            return new Media(data)
        }
        else if (data.video) {
            return new Media(data)
        }
    }
}