/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Fonction pour créer un élément de carte média (article) pour un média donné
function getMediaCardDOM(media) {

    // Crée un nouvel élément <article> pour représenter la carte média
    const article = document.createElement('article');
    article.classList.add("mediaArticle"); 
    // Ajoute un identifiant unique à la carte média (basé sur l'ID du média)
    article.id = `media-${media.id}`; 

    // Génère le contenu HTML de la carte média en utilisant les propriétés du média
    const mediaCard = `
        <div>
            <a href="${media.getPath()}" title="ouvrir le media" aria-label="${media.title} aimé ${media.likes} fois">
                ${media.getTypeOfMedia()}
            </a>
            <div class="infosMedia">
                <p>${media.title}</p>
                <button
                    id="like-${media.id}"
                    class="media-figure-figcaption-btn"
                    aria-label="Ajouter un like au media : ${media.title}">
                    <span id="nbr-likes-${media.id}" class="nbr-likes">${media.likes}</span> 
                    <i class="fa-regular fa-heart like-icon--empty"></i>
                    <i class="fa-solid fa-heart like-icon--full hidden-heart"></i>
                </button>
            </div>
        </div>
    `;

    // Insère le contenu HTML généré dans l'élément <article> de la carte média en utilisant 'innerHTML'
    article.innerHTML = mediaCard;

    // Retourne l'élément <article> représentant la carte média avec son contenu
    return article;
}


// Fonction pour créer l'élément de la lightbox (dialog) et le contenu en fonction du média passé en paramètre
function getLightbox(media) {

    // Crée un nouvel élément <dialog> pour représenter la lightbox et lui attribue un identifiant unique 'lightbox'
    const lightbox = document.createElement("dialog");
    lightbox.id = 'lightbox';

    // Génère le contenu interne de la lightbox en utilisant la fonction 'generateInnerHtmlLightBox' avec le média spécifié
    const lightboxContainer = generateInnerHtmlLightBox(media);

    // Insère le contenu interne généré dans l'élément <dialog> de la lightbox en utilisant 'innerHTML'
    lightbox.innerHTML = lightboxContainer;

    // Retourne l'élément <dialog> représentant la lightbox avec son contenu
    return lightbox;
}


// Génère le contenu HTML de la lightbox en utilisant les propriétés du média
function generateInnerHtmlLightBox(media) {
    // Utilise les méthodes 'getPath()' et 'getTypeOfMedia()' du média pour obtenir les liens et le type de média (image ou vidéo)
    // Insère ces informations dans le contenu HTML de la lightbox avec un lien cliquable pour le média

    return  `<div class="lightboxContent">
    <a href="${media.getPath()}" title="ouvrir le media">
    ${media.getTypeOfMedia()}
    </a>
    <button class="closeLightbox" aria-label="Fermeture modal"><i class="fas fa-times"></i></button>
    <p class="lightboxTitle">${media.title}</p>
    <button class="prev"><span aria-label="Media précédent"><i class="fas fa-angle-left"></i></span></button>
    <button class="next"><span aria-label="Media suivant"><i class="fas fa-angle-right"></i></span></button>
</div>
`
}


// Fonction pour créer et afficher le module de filtres pour la galerie de médias
function filters() {

    // Crée un nouvel élément <div> pour représenter le module de filtres
    const div = document.createElement('div');
    div.classList.add('filters'); 

    // Génère le contenu HTML du module de filtres
    const filter = `
        <p>Trier par </p>
        <div class="filtersContainer">
            <button class="chevronFilter" aria-label="Trier les médias par" ><i class="fa-solid fa-chevron-up"></i></button>
            <ul class="filtersUl">
                <li><button type="button" id="popularFilter" aria-label="Popularité"><span>Popularité</span></button></li>
                <li><button type="button" id="dateFilter" aria-label="Date"><span>Date</span></button></li>
                <li><button type="button" id="titleFilter" aria-label="Titre"><span>Titre</span></button></li>
            </ul>
        </div>
    `;

    // Insère le contenu HTML généré dans l'élément <div> du module de filtres en utilisant 'innerHTML'
    div.innerHTML = filter;

    // Appelle la fonction 'filterAnimation' pour ajouter les événements de clic aux boutons du module de filtres
    filterAnimation(div);

    // Retourne l'élément <div> représentant le module de filtres avec son contenu interne
    return div;
}


// Fonction pour créer et afficher le nombre total de likes du photographe et son tarif journalier
function getLikesAndPrice(photographer) {

    // Crée un nouvel élément <div> pour représenter le bloc de likes et de tarif du photographe
    const div = document.createElement('div');
    div.classList.add('likes-price'); 

    // Génère le contenu HTML du bloc de likes et de tarif en utilisant les propriétés du photographe
    const likesPriceLabel = `
        <p>
            <span class="totalLikeNumber"></span> 
            <span><i class="fa-solid fa-heart"></i></span>
            <span aria-label="${photographer.price}€ par jour" tabindex="0">${photographer.price}€/jour</span> 
        </p>
    `;

    // Insère le contenu HTML généré dans l'élément <div> du bloc de likes et de tarif en utilisant 'innerHTML'
    div.innerHTML = likesPriceLabel;

    // Retourne l'élément <div> représentant le bloc de likes et de tarif avec son contenu interne
    return div;
}
