/* eslint-disable no-undef */

// Variable pour stocker les médias du photographe
let mediaPhotographer = [];

// Fonction asynchrone pour récupérer les données du fichier JSON
async function dataPhotographer(file) {
    // Effectue une requête fetch pour récupérer les données du fichier JSON spécifié
    const response = await fetch(file);

    // Attend que les données soient converties en format JSON
    const data = await response.json();

    // Retourne les données au format JSON
    return data;
}


// Fonction qui va chercher dans le tableau photographers et exécute une fonction de
// rappel sur chaque élément photographer.
// La fonction de rappel vérifie si l'identifiant de l'élément correspond à 
// l'identifiant fourni en paramètre.
function findPhotographer(photographers, id) {
    const photographer = photographers.find(photographer => photographer.id === id);
    return photographer;
}


// Fonction qui affiche le header du photographe
function headerPhotographer(photographer) {
    // Récupère l'élément HTML <main> où sera ajouté l'en-tête du photographe
    const main = document.querySelector('#main');

    // Récupère l'élément DOM représentant la carte du photographe en utilisant la fonction 'getPhotographerDOM'
    const userCardHeader = getPhotographerDOM(photographer);

    // Ajoute l'en-tête du photographe à l'élément <main>
    main.appendChild(userCardHeader);
}

// Fonction pour rechercher les médias du photographe
function getMediaPhotographer(id, media) {
    // Filtre les médias pour récupérer uniquement ceux dont l'identifiant du photographe correspond à l'id spécifié
    const mediaByPhotographer = media.filter(media => media.photographerId === id);

    // Retourne la liste des médias filtrés
    return mediaByPhotographer;
}


// Fonction pour afficher les medias
function displayMediaPhotographer(mediaPhotographer, photographerId) {
    // Sélectionne l'élément '#main' dans le DOM
    const main = document.querySelector('#main');

    // Crée un élément div pour contenir la galerie des médias et lui ajoute la classe 'media-gallery'
    const mediaSection = document.createElement('div');
    mediaSection.classList.add('media-gallery');
    // Ajoute la galerie des médias à l'élément '#main'
    main.appendChild(mediaSection);

    // Récupère les médias spécifiques au photographe en utilisant la fonction 'getMediaPhotographer'
    const photographerMedia = getMediaPhotographer(photographerId, mediaPhotographer);

    // Affiche les médias triés
    const displaySortedMedia = (sortedMedia) => {
        // Efface le contenu précédent de la galerie des médias
        mediaSection.innerHTML = '';

        // Parcours chaque média trié
        sortedMedia.forEach((media, index) => {
            // Crée un DOM pour le média en utilisant la fonction 'getMediaCardDOM'
            const mediaGallery = getMediaCardDOM(media);

            // Obtention du lien à l'intérieur de mediaGallery
            const mediaLink = mediaGallery.querySelector('a');

            // Ajout de la propriété tabindex pour rendre le lien focalisable
            mediaLink.setAttribute('tabindex', '0');

            // Ajoute le DOM du média à la galerie des médias
            mediaSection.appendChild(mediaGallery);

            // Initialise le lightbox pour le média
            initLightbox(mediaGallery, media, mediaPhotographer, index);

            // Associe l'événement de clic au bouton like du média
            bindLikeButton(media.id);
        });
    };

    // Ecouteur d'événement pour 'popularFilter'
    document.querySelector('#popularFilter').addEventListener('click', () => {
        // Trie les médias par nombre de likes décroissant
        const sortedMedia = [...photographerMedia].sort((a, b) => b._likes - a._likes);

        // Affiche les médias triés
        displaySortedMedia(sortedMedia);
    });

    // Ecouteur d'événement pour 'dateFilter'
    document.querySelector('#dateFilter').addEventListener('click', () => {
        // Trie les médias par date décroissante
        const sortedMedia = [...photographerMedia].sort((a, b) => new Date(b.date) - new Date(a.date));

        // Affiche les médias triés
        displaySortedMedia(sortedMedia);
    });

    // Ecouteur d'événement pour 'titleFilter'
    document.querySelector('#titleFilter').addEventListener('click', () => {
        // Trie les médias par titre (ordre alphabétique)
        const sortedMedia = [...photographerMedia].sort((a, b) => a._title.localeCompare(b._title));

        // Affiche les médias triés
        displaySortedMedia(sortedMedia);
    });

    // Affiche initialement les médias du photographe (non triés)
    displaySortedMedia(photographerMedia);
}


// Initialisation de la lightbox
function initLightbox(mediaElement, media, medias, index) {
    // Récupère l'élément <a> à l'intérieur de mediaElement
    let linkElement = mediaElement.querySelector('a');

    // Ajoute un écouteur d'événement pour le clic sur le lien
    linkElement.addEventListener('click', (e) => {
        e.preventDefault();
        // Ouvre le lightbox avec les informations du média et la liste complète des médias
        openLightbox(media, medias, index);
    });

    // Ajoute un écouteur d'événement pour la touche "Enter" lorsqu'on se trouve sur le lien
    linkElement.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            // Ouvre le lightbox avec les informations du média et la liste complète des médias
            openLightbox(media, medias, index);
        }
    });
}


// Ouverture de la lightbox
function openLightbox(media, medias, index) {
    // Récupère le contenu HTML pour le lightbox en utilisant la fonction 'getLightbox'
    let lightboxInnerHtml = getLightbox(media);

    // Ajoute le contenu HTML du lightbox au corps du document
    document.body.appendChild(lightboxInnerHtml);

    // Récupère l'élément du lightbox depuis le DOM
    let lightboxElement = document.querySelector('#lightbox');

    // Crée une nouvelle instance de la classe Lightbox et l'associe à l'élément du lightbox
    let lightbox = new Lightbox(lightboxElement, medias, media, index);

    // Affiche le lightbox avec les informations du média actuel et la liste complète des médias
    lightbox.show();
}


function bindLikeButton(id) {
    // Récupère le bouton like du média spécifié par son ID
    const mediaLikeBtn = document.getElementById(`like-${id}`);

    // Ajoute un écouteur d'événement pour le clic sur le bouton like
    mediaLikeBtn.addEventListener('click', () => {
        // Appelle la fonction "incrementLikes" pour incrémenter le nombre de like du média
        incrementLikes(id);
    });
}


// Fonction d'incrémentation des likes
function incrementLikes(id) {
    // Convertit l'id en nombre
    parseInt(id);

    // Récupère l'élément HTML du bouton like pour le média spécifié par son id
    const likeBtn = document.getElementById(`like-${id}`);

    // Récupère l'élément HTML contenant le nombre total de likes sur la page
    const spanTotalLikes = document.getElementById('totalLikeNumber');

    // Récupère le nombre total de likes de la page en tant qu'entier
    let totalLikes = parseInt(spanTotalLikes.innerText);

    // Récupère l'élément HTML <span> contenant le nombre de like spécifique pour le média
    const spanNbrLikes = document.getElementById(`nbr-likes-${id}`);

    // Récupère la valeur du <span> représentant le nombre de likes pour le média en tant qu'entier
    let nbrLikesMedia = parseInt(spanNbrLikes.innerText);

    // Vérifie si le bouton like n'a pas déjà été cliqué (classe 'clicked' absente)
    if (!likeBtn.classList.contains('clicked')) {
        // Incrémente le nombre de likes pour le média spécifique et met à jour l'affichage
        spanNbrLikes.innerHTML = nbrLikesMedia + 1;
        likeBtn.classList.add('clicked');
        spanTotalLikes.innerHTML = totalLikes + 1;

        // Masque le cœur vide et affiche le cœur rempli pour indiquer le like de l'utilisateur
        likeBtn.querySelector('.like-icon--empty').classList.add('hidden-heart');
        likeBtn.querySelector('.like-icon--full').classList.remove('hidden-heart');
    } else {
        // Décrémente le nombre de like pour le média spécifique et met à jour l'affichage
        spanNbrLikes.innerHTML = nbrLikesMedia - 1;
        likeBtn.classList.remove('clicked');
        spanTotalLikes.innerHTML = totalLikes - 1;

        // Affiche le cœur vide pour indiquer que l'utilisateur a retiré son like
        likeBtn.querySelector('.like-icon--empty').classList.remove('hidden-heart');
        likeBtn.querySelector('.like-icon--full').classList.add('hidden-heart');
    }
}


// Fonction qui met à jour le nombre total de likes
function updateTotalLikes(totalLikes) {
    // Récupère l'élément HTML <span> qui affiche le nombre total de likes
    const spanTotalLikes = document.querySelector('.totalLikeNumber');
    spanTotalLikes.setAttribute("tabindex", "0")

    // Met à jour le contenu HTML du <span> avec le nombre total de likes
    spanTotalLikes.innerHTML = `
        <span id="totalLikeNumber" aria-label="${totalLikes} likes">${totalLikes}</span> 
    `;
}


async function init() {
    // Récupère les données du fichier "photographers.json" de manière asynchrone
    const data = await dataPhotographer('../../data/photographers.json');

    // Convertit les données des photographes en instances de TypeDataFactory avec le type "photographer"
    const photographers = data.photographers.map(photographer => new TypeDataFactory(photographer, "photographer"));

    // Convertit les données des médias en instances de TypeDataFactory avec le type "media"
    const medias = data.media.map(media => new TypeDataFactory(media, "media"));

    // Récupère le paramètre "id" de l'URL et le convertit en entier pour obtenir l'identifiant du photographe
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = parseInt(urlParams.get('id'));

    // Trouve le photographe correspondant à l'identifiant récupéré
    const photographer = findPhotographer(photographers, photographerId);

    // Récupère tous les médias du photographe
    mediaPhotographer = getMediaPhotographer(photographerId, medias);

    // Associe les médias récupérés au photographe
    photographer.medias = mediaPhotographer;

    // Convertit tous les médias du photographe en instances de TypeMediaFactory
    const allMedias = mediaPhotographer.map(media => new TypeMediaFactory(media));

    // Associe les médias convertis au photographe
    photographer.medias = allMedias;

    // Génération du nom du photographe dans la Modal
    const artistName = document.querySelector('.nameArtist');
    artistName.textContent = photographer.name;

    // Appel des fonctions pour générer l'en-tête du photographe, les filtres, les médias, les likes et le prix
    headerPhotographer(photographer);
    const filterModule = filters();
    main.appendChild(filterModule);

    const contactButton = document.querySelector('.contact_button');
    contactButton.setAttribute('aria-label', `Contacter ${photographer.name}`);

    // Affichage des médias du photographe dans la galerie
    displayMediaPhotographer(photographer.medias, photographerId);

    // Création de l'élément DOM contenant les informations sur les likes et le prix du photographe
    const displayLikesAndPrice = getLikesAndPrice(photographer);
    main.appendChild(displayLikesAndPrice);

    // Calcul du total des likes en additionnant le nombre de likes de chaque média du photographe
    const allLikes = mediaPhotographer.map(media => media.likes);
    const totalLikes = allLikes.reduce((a, b) => a + b, 0);

    // Mise à jour de l'affichage du nombre total de likes sur la page
    updateTotalLikes(totalLikes);
}

init();

