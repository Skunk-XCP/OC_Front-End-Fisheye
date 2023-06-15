import { getUserCardDOM, getPhotographerDOM } from "../utils/photographerUtils.js";

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
    const headerModel = getUserCardDOM(photographer);
    const userCardHeader = headerModel.getPhotographerDOM();
    // const userCardHeader = getPhotographerDOM();

    main.appendChild(userCardHeader);

};


// Recherche des medias
const getMediaPhotographer = (id, media) => {
    const mediaByPhotographer = media.filter(media => media.photographerId === id);
    return mediaByPhotographer;
};

// Fonction qui affiche les medias
function displayMediaPhotographer(mediaPhotographer) {
    const main = document.querySelector( '#main' );
    const mediaGallery = mediaFactory(mediaPhotographer);
    const mediaItem = mediaGallery.getMediaCardDOM();

    main.appendChild(mediaItem);
}



async function init() {
    const data = await dataPhotographer( '../../data/photographers.json' );

    // les accolades permettent de récupérer l'objet photographers
    // const {photographers, media} = data;
    
    const photographers = data.photographers.map(photographer => new TypeDataFactory(photographer, "photographer")); 
    
    const medias = data.media.map(media => new TypeDataFactory(media, "media"));
    

    // Création d'une nouvelle instance de l'objet URLSP
    // search contient la chaîne de requête de l'URL qui se trouve après le "?"
    const urlParams = new URLSearchParams(window.location.search);

    // Extraction  la valeur du paramètre "id" pour la convertir en integer
    const photographerId = parseInt(urlParams.get('id'));
    
    const photographer = findPhotographer(photographers, photographerId);
    // Trouver les media correspondant aux photographes
    mediaPhotographer = getMediaPhotographer(photographerId, medias);

    
    // Génération du nom du photographe dans la Modal
    const artistName = document.querySelector('.nameArtist');
    artistName.textContent = photographer.name;


    // appelle la fonction headerPhotographer
    headerPhotographer(photographer);
    displayMediaPhotographer(mediaPhotographer, photographerId);
};

init();

