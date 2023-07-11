
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
const findPhotographer = (photographers, id) => {
    const photographer = photographers.find(photographer => photographer.id === id);
    return photographer;
};

// Fonction qui affiche le header du photographe
function headerPhotographer(photographer) {
    const main = document.querySelector('#main');
    const userCardHeader = getPhotographerDOM(photographer);

    main.appendChild(userCardHeader);
};

// Recherche des medias
const getMediaPhotographer = (id, media) => {
    const mediaByPhotographer = media.filter(media => media.photographerId === id);
    return mediaByPhotographer;
};

// Fonction qui affiche les medias
function displayMediaPhotographer(mediaPhotographer, photographerId) {
    const main = document.querySelector('#main');
    const mediaSection = document.createElement('div');
    mediaSection.classList.add('media-gallery');

    const photographerMedia = getMediaPhotographer(photographerId, mediaPhotographer);

    photographerMedia.forEach((media, index) => {
        const mediaGallery = getMediaCardDOM(media);

        mediaSection.appendChild(mediaGallery);

        // initLightbox(mediaGallery, media, photographerId, mediaPhotographer, index);

    });

    main.appendChild(mediaSection);
}

// Tri des medias par popularité
 function popularSort(allMedias, photographerId) {
    const popularFilter = document.querySelector(".popularFilter")
   
    popularFilter.addEventListener('click', () => {
        const gallery = document.querySelector('.media-gallery')
        gallery.innerHTML = '';

        const popular = allMedias.sort(function(a,b) {
            return b._likes - a._likes;
        });

        displayMediaPhotographer(popular, photographerId);
    })
}

// Tri des medias par date
function dateSort(allMedias, photographerId) {
    const dateFilter = document.querySelector(".dateFilter")

    dateFilter.addEventListener('click', () => {
        const gallery = document.querySelector('.media-gallery')
        gallery.innerHTML = '';

        const date = allMedias.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        });

        displayMediaPhotographer(date, photographerId);
    })
}

// Tri des medias par titre
function titleSort(allMedias, photographerId) {
    const titleFilter = document.querySelector(".titleFilter")

    titleFilter.addEventListener('click', () => {
        const gallery = document.querySelector('.media-gallery')
        gallery.innerHTML = '';

        const title = allMedias.sort((a, b) => a._title.localeCompare(b._title));
        displayMediaPhotographer(title, photographerId);
    });
}









function incrementLikes(totalLikes) {

    const likeNumberElement = document.querySelectorAll('.likeNumber');
    const likeButton = document.querySelectorAll('.likeLogo');
    const spanTotalLikes = document.querySelector('.totalLikeNumber');

    likeButton.forEach((heart, index) => {
        heart.addEventListener('click', () => {
            if (!heart.classList.contains('clicked')) {
                likeNumberElement[index].innerHTML++
                heart.classList.add('clicked')
                totalLikes++
                spanTotalLikes.innerHTML = `
                <span class="totalLikeNumber" aria-label="total de likes">${totalLikes}</span> 
                `;
            } else {
                likeNumberElement[index].innerHTML--
                heart.classList.remove('clicked')
                totalLikes--
                spanTotalLikes.innerHTML = `
                <span class="totalLikeNumber" aria-label="total de likes">${totalLikes}</span> 
                `;
            }
        })
    })
}

function initLightbox(mediaElement, media, mediaPhotographer, index) {
    mediaElement.addEventListener('click', (e) => {
        e.preventDefault();
        let lightboxElement = getLightbox(media);
        document.body.appendChild(lightboxElement);


        let mediaElement = document.querySelector(`#lightbox`);
        let galleryElements = mediaPhotographer; // récupération des éléments de la galerie
        let lightbox = new Lightbox(mediaElement, galleryElements, mediaPhotographer, index);

        lightbox.show(media);
    });
}


async function init() {
    const data = await dataPhotographer('../../data/photographers.json');

    const photographers = data.photographers.map(photographer => new TypeDataFactory(photographer, "photographer"));

    const medias = data.media.map(media => new TypeDataFactory(media, "media"));

    // Création d'une nouvelle instance de l'objet URLSP
    // search contient la chaîne de requête de l'URL qui se trouve après le "?"
    const urlParams = new URLSearchParams(window.location.search);

    // Extraction  la valeur du paramètre "id" pour la convertir en integer
    const photographerId = parseInt(urlParams.get('id'));

    const photographer = findPhotographer(photographers, photographerId);
    // On utilise nos instances de Image ou Video pour récupérer les medias du photographe
    mediaPhotographer = getMediaPhotographer(photographerId, medias);
    photographer.medias = mediaPhotographer;


    const allLikes = mediaPhotographer.map(medias => medias.likes);

    const totalLikes = allLikes.reduce((a, b) => a + b, 0)

    const allMedias = mediaPhotographer.map(media => new TypeMediaFactory(media));
    photographer.medias = allMedias;
    // Génération du nom du photographe dans la Modal
    const artistName = document.querySelector('.nameArtist');
    artistName.textContent = photographer.name;

    // appel des fonctions
    headerPhotographer(photographer);
    const filterModule = filters();
    main.appendChild(filterModule);

    displayMediaPhotographer(photographer.medias, photographerId);
    
    popularSort(allMedias, photographerId);
    dateSort(allMedias, photographerId);
    titleSort(allMedias, photographerId);

    const displayLikesAndPrice = getLikesAndPrice(photographer);
    main.appendChild(displayLikesAndPrice);

    const spanTotalLikes = document.querySelector('.totalLikeNumber');
    spanTotalLikes.innerHTML = `
    <span class="totalLikeNumber" aria-label="total de likes">${totalLikes}</span> 
    `;

    // sortByPopularity(photographer.medias, photographerId);
    incrementLikes(totalLikes);

}

init();

