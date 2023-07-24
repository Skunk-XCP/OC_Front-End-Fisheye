
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
function findPhotographer(photographers, id) {
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
function getMediaPhotographer(id, media) {
    const mediaByPhotographer = media.filter(media => media.photographerId === id);
    return mediaByPhotographer;
};

// Fonction pour afficher les medias
function displayMediaPhotographer(mediaPhotographer, photographerId) {
    const main = document.querySelector('#main');
    const mediaSection = document.createElement('div');
    mediaSection.classList.add('media-gallery');
    main.appendChild(mediaSection);

    const photographerMedia = getMediaPhotographer(photographerId, mediaPhotographer);

    // Affiche les médias triés
    const displaySortedMedia = (sortedMedia) => {
        mediaSection.innerHTML = '';
        sortedMedia.forEach((media, index) => {
            const mediaGallery = getMediaCardDOM(media);

            // Obtention du lien à l'intérieur de mediaGallery
            const mediaLink = mediaGallery.querySelector('a');

            // Ajout de la propriété tabindex pour rendre le lien focalisable
            mediaLink.setAttribute('tabindex', '0');

            mediaSection.appendChild(mediaGallery);
            initLightbox(mediaGallery, media, mediaPhotographer, index);
            bindLikeButton(media.id);
        });
    };

    // Ecouteur d'événement pour 'popularFilter'
    document.querySelector('#popularFilter').addEventListener('click', () => {
        const sortedMedia = [...photographerMedia].sort((a, b) => b._likes - a._likes);

        displaySortedMedia(sortedMedia);
    });

    // Ecouteur d'événement pour 'dateFilter'
    document.querySelector('#dateFilter').addEventListener('click', () => {
        const sortedMedia = [...photographerMedia].sort((a, b) => new Date(b.date) - new Date(a.date));

        displaySortedMedia(sortedMedia);
    });

    // Ecouteur d'événement pour 'titleFilter'
    document.querySelector('#titleFilter').addEventListener('click', () => {
        const sortedMedia = [...photographerMedia].sort((a, b) => a._title.localeCompare(b._title));

        displaySortedMedia(sortedMedia);
    });

    displaySortedMedia(photographerMedia);
}

// Initialisation de la lightbox
function initLightbox(mediaElement, media, medias, index) {
    let linkElement = mediaElement.querySelector('a');

    linkElement.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(media, medias, index);
    });

    linkElement.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            openLightbox(media, medias, index);
        }
    });
}

// Ouverture de la lightbox
function openLightbox(media, medias, index) {
    let lightboxInnerHtml = getLightbox(media);
    document.body.appendChild(lightboxInnerHtml);

    let lightboxElement = document.querySelector('#lightbox');
    let lightbox = new Lightbox(lightboxElement, medias, media, index);

    lightbox.show();
}

// Fonction incrémentation like image et total
// function incrementLikes(totalLikes) {

//     const likeNumberElement = document.querySelectorAll('.likeNumber');
//     const likeButton = document.querySelectorAll('.likeLogo');

//     likeButton.forEach((heart, index) => {
//         heart.addEventListener('click', () => {
//             if (!heart.classList.contains('clicked')) {
//                 likeNumberElement[index].innerHTML++
//                 heart.classList.add('clicked')
//                 totalLikes++
//                 updateTotalLikes(totalLikes);
//             } else {
//                 likeNumberElement[index].innerHTML--
//                 heart.classList.remove('clicked')
//                 totalLikes--
//                 updateTotalLikes(totalLikes);
//             }
//         })
//     })
// }


function bindLikeButton(id) {
    const mediaLikeBtn = document.getElementById(`like-${id}`);
    mediaLikeBtn.addEventListener('click', () => {
        incrementLikes(id);
    });
}

function incrementLikes(id) {
    // je transforme l'id en nombre
    const parseId = parseInt(id)
    // je recupere l'element html button pour le like de mon media
    const likeBtn = document.getElementById(`like-${id}`);
    // je recupere l'element html contenant le total des likes
    const spanTotalLikes = document.getElementById('totalLikeNumber');
    // je recupere le total de likes de la page
    let totalLikes = parseInt(spanTotalLikes.innerText);
    // je recupere l'element html span dans lequel il y a le nbre de likes de mon media
    const spanNbrLikes = document.getElementById(`nbr-likes-${id}`);
    // je recupere la valeur du span en integer
    let nbrLikesMedia = parseInt(spanNbrLikes.innerText);


    if (!likeBtn.classList.contains('clicked')) {
        spanNbrLikes.innerHTML = nbrLikesMedia + 1;
        likeBtn.classList.add('clicked')
        spanTotalLikes.innerHTML = totalLikes + 1;

        likeBtn.querySelector('.like-icon--empty').classList.add('hidden-heart'); // Masque le coeur vide
        likeBtn.querySelector('.like-icon--full').classList.remove('hidden-heart');
    } else {
        spanNbrLikes.innerHTML = nbrLikesMedia - 1;
        likeBtn.classList.remove('clicked')
        spanTotalLikes.innerHTML = totalLikes - 1;

        likeBtn.querySelector('.like-icon--empty').classList.remove('hidden-heart'); // Affiche le coeur vide
        likeBtn.querySelector('.like-icon--full').classList.add('hidden-heart');
    }
}

function updateTotalLikes(totalLikes) {
    const spanTotalLikes = document.querySelector('.totalLikeNumber');
    spanTotalLikes.innerHTML = `
        <span id="totalLikeNumber" aria-label="total de likes">${totalLikes}</span> 
    `;
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

    window.addEventListener('keydown', function (event) {
        console.log(`Pressed key: ${event.key}`);
    });

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

    const displayLikesAndPrice = getLikesAndPrice(photographer);
    main.appendChild(displayLikesAndPrice);

    const allLikes = mediaPhotographer.map(medias => medias.likes);
    const totalLikes = allLikes.reduce((a, b) => a + b, 0)

    updateTotalLikes(totalLikes);
}

init();

