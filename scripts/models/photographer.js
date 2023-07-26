/* eslint-disable no-unused-vars */

// Définition de la classe Photographer pour représenter un photographe
class Photographer {
    // Constructeur de la classe Photographer
    constructor(data) {
        // Initialisation des propriétés du photographe à partir des données fournies
        this._name = data.name;
        this._id = data.id;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._portrait = data.portrait;
    }

    // Méthodes pour accéder aux propriétés du photographe
    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    get tagline() {
        return this._tagline;
    }

    get price() {
        return this._price;
    }

    // La méthode get portrait() renvoie le chemin (URL) vers la photo du photographe
    get portrait() {
        return `assets/photographers/${this._portrait}`;
    }

    // Méthode set medias(medias) pour définir la liste des médias associés au photographe
    set medias(medias) {
        this._medias = medias;
    }

    // Méthode get medias() pour obtenir la liste des médias associés au photographe
    get medias() {
        return this._medias;
    }
}
