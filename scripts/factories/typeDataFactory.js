class TypeDataFactory {
    constructor(data, type) {
        if (type === "photographer") {
            return new Photographer(data)
        } else if (type === "media") {
            return new Media(data)
        }else {
            throw "unknow type format"
        }
    }
}
