import { photographerFactory } from "../factories/photographer.js"; 
// import { mediaFactory } from "../factories/media.js";

// let mediaPhotographer = [];

async function dataPhotographer(file) {
    const response = await fetch(file);
    const data = await response.json();
    return data;
};

const findPhotographer  = (photographers, id) => {
    const photographer =  photographers.find((photographer) => photographer.id === id);
    return photographer;
};

// fonction qui affiche le header du photographe
function headerPhotographer(photographer) {
    const photographerHeader = document.querySelector( '.photograph-header' );

    const nameArtist = document.createElement( 'h2' );
    nameArtist.textContent = photographer.name;
    
    const profilPic = document.createElement( 'img' );
    profilPic.setAttribute("src", `../assets/photographers/${photographer.portrait}`);

    const living = document.createElement( 'p' );
    living.textContent = `${photographer.city}, ${photographer.country}`;

    const catchLine = document.createElement( 'p' );
    catchLine.textContent = photographer.tagline;

    photographerHeader.appendChild(nameArtist);
    photographerHeader.appendChild(living);
    photographerHeader.appendChild(catchLine);
    photographerHeader.appendChild(profilPic);

};

async function init() {
    const data = await dataPhotographer( '../../data/photographers.json' );
    // les accolades permettent de récupérer l'objet photographers
    const {photographers} = data;

    const urlParams = new URLSearchParams(window.location.search);
    const artistId = parseInt(urlParams.get('id'));
    
    const photographer = findPhotographer(photographers, artistId);


    // appelle la fonction headerPhotographer
    headerPhotographer(photographer);
};

init();