class TypeDataFactory {
    constructor(data) {
        if (data === "photographers") {
            return new Photographer(data)
        } else if (data === "media") {
            return new Media(data)
        }else {
            throw "unknow type format"
        }
    }
}