/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Définition de la classe Video qui étend la classe Media
class Video extends Media {
    // Constructeur de la classe Video
    constructor(data) {
        // Appelle le constructeur de la classe parent (Media) avec le mot clé "super"
        // pour initialiser les propriétés héritées de la classe Media
        super(data);

        // Initialise l'attribut spécifique aux vidéos, "_video", à partir des données passées en paramètre
        this._video = data._video;
    }

    // Méthode pour obtenir le chemin d'accès à la vidéo
    getPath() {
        // Méthode pour obtenir le chemin de la vidéo
        return `assets/images/${this._photographerId}/${this._video}`;
    }

    // Méthode pour obtenir le balisage HTML de la vidéo
    getTypeOfMedia() {
        // Méthode pour obtenir le code HTML de la vidéo
        return `<video src="${this.getPath()}" aria-label="${this._title}" poster=""></video>`;
    }
}
