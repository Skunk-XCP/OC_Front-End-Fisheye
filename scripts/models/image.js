/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Définition de la classe Image pour représenter les images associées aux photographes
class Image extends Media {
    // Constructeur de la classe Image
    constructor(data) {
        // Appel du constructeur de la classe mère (Media) avec 'super(data)' pour initialiser les propriétés héritées
        super(data);
        this._image = data._image;
    }

    // Méthode pour obtenir le chemin de l'image
    getPath() {
        return `assets/images/${this._photographerId}/${this._image}`;
    }

    // Méthode pour obtenir le code HTML de l'image
    getTypeOfMedia() {
        return `<img src="${this.getPath()}" alt="${this._title}">`;
    }
}
