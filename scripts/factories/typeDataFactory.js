/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Définition de la classe TypeDataFactory pour créer des instances de données spécifiques (Photographer ou Media)
class TypeDataFactory {
    constructor(data, type) {
        // Si le type est "photographer"
        if (type === "photographer") {
            // On renvoie une nouvelle instance de la classe Photographer en utilisant les données fournies
            return new Photographer(data);
        }
        // Si le type est "media"
        else if (type === "media") {
            // On renvoie une nouvelle instance de la classe Media en utilisant les données fournies
            return new Media(data);
        }
        // Si le type est autre que "photographer" ou "media", le format du type est inconnu
        else {
            // On lance une exception avec le message "unknown type format"
            throw "unknown type format";
        }
    }
}
