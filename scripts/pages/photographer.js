import { photographerFactory } from "../factories/photographer.js"; 
import { mediaFactory } from "../factories/media.js";

let mediaPhotographer = [];

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
const getMediaPhotographer = (media, id) => {
    const mediaByPhotographer = media.filter(media => media.photographerId === id);
    console.log(media);
    return mediaByPhotographer;
};

// Fonction qui affiche les media
function displayMediaPhotographer(mediaPhotographer) {
    const main = document.querySelector( '#main' );
    const mediaGallery = mediaFactory(mediaPhotographer);
    const mediaItem = mediaGallery.getMediaCardDOM();
    main.appendChild(mediaItem);
}



async function init() {
    const data = await dataPhotographer( '../../data/photographers.json' );

    // les accolades permettent de récupérer l'objet photographers
    const {photographers, media} = data;

    // Création d'une nouvelle instance de l'objet URLSP
    // search contient la chaîne de requête de l'URL qui se trouve après le "?"
    const urlParams = new URLSearchParams(window.location.search);
    // Extraction  la valeur du paramètre "id" pour la convertir en integer
    const photographerId = parseInt(urlParams.get('id'));
    
    const photographer = findPhotographer(photographers, photographerId);
    
    // Génération du nom du photographe dans la Modal
    const artistName = document.querySelector('.nameArtist');
    artistName.textContent = photographer.name;

    // Trouver les media correspondant aux photographes
    mediaPhotographer = getMediaPhotographer(photographerId, media);

    

    // appelle la fonction headerPhotographer
    headerPhotographer(photographer);
    findMediaPhotographer(media, id);
    displayMediaPhotographer(filteredMedia);
};

init();

