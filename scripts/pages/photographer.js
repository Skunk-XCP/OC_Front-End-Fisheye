import { photographerFactory } from "../factories/photographer.js"; 
import { mediaFactory } from "../factories/media.js";

// let mediaPhotographer = [];

async function dataPhotographer(file) {
    const response = await fetch(file);
    const data = await response.json();
    return data;
};

// Fonction qui va chercher dans le tableau photographers et exécute une fonction de
// rappel sur chaque élément photographer.
// La fonction de rappel vérifie si l'identifiant de l'élément correspond à 
// l'identifiant fourni en paramètre.
const findPhotographer  = (photographers, id) => {
    const photographer =  photographers.find(photographer => photographer.id === id);
    return photographer;
};

// Fonction qui affiche le header du photographe
function headerPhotographer(photographer) {
    const main = document.querySelector( '#main' );
    const headerModel = photographerFactory(photographer);
    const userCardHeader = headerModel.getPhotographerDOM();
    main.appendChild(userCardHeader);

};


// Recherche des media
// const findMediaPhotographer = (media, id) => {
//     const mediaPhotographer = media.find(media => media.photographerId === id);
//     return mediaPhotographer;
// };

// Fonction qui affiche les media

async function init() {
    const data = await dataPhotographer( '../../data/photographers.json' );

    // les accolades permettent de récupérer l'objet photographers
    const {photographers, media} = data;

    const urlParams = new URLSearchParams(window.location.search);
    const artistId = parseInt(urlParams.get('id'));
    
    const photographer = findPhotographer(photographers, artistId);

    // Génération du nom du photographe dans la Modal
    const artistName = document.querySelector('.nameArtist');
    artistName.textContent = photographer.name;

    // Trouver la correspondance - commentaire à modifier
    // const mediaPhotographer = findMediaPhotographer(media, artistId);

    // appelle la fonction headerPhotographer
    headerPhotographer(photographer);
    // findMediaPhotographer(media, id);
};

init();

