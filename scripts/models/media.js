/* eslint-disable no-unused-vars */

// Définition de la classe Media pour représenter les médias (images et vidéos) associés aux photographes
class Media {
    // Constructeur de la classe Media
    constructor(data) {
        // Initialise les propriétés de la classe à partir des données passées en paramètre
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._image = data.image;
        this._video = data.video;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
    }

    // Getter pour obtenir l'ID du média
    get id() {
        return this._id;
    }

    // Getter pour obtenir l'ID du photographe associé au média
    get photographerId() {
        return this._photographerId;
    }

    // Getter pour obtenir le titre du média
    get title() {
        return this._title;
    }

    // Getter pour obtenir le nombre de likes du média
    get likes() {
        return this._likes;
    }

    // Getter pour obtenir la date du média
    get date() {
        return this._date;
    }

    // Getter pour obtenir le prix du média
    get price() {
        return this._price;
    }
}
