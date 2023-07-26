/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Définition de la classe TypeMediaFactory pour créer des instances de médias spécifiques (Image ou Video)
class TypeMediaFactory {
    constructor(data) {
        // Si l'objet data contient la propriété _image
        if (data._image) {
            // On renvoie une nouvelle instance de la classe Image en utilisant les données fournies
            return new Image(data);
        }
        // Si l'objet data contient la propriété _video
        else if (data._video) {
            // On renvoie une nouvelle instance de la classe Video en utilisant les données fournies
            return new Video(data);
        }
        // Si l'objet data ne contient ni _image ni _video, cela signifie que le format du média est inconnu
        else {
            // On lance une exception avec le message "unknown format"
            throw "unknown format";
        }
    }
}
