
function getMediaCardDOM(media) {
    const article = document.createElement( 'article' );
    article.classList.add("mediaArticle");
    article.id = `media-${media.id}`; // On ajoute un id unique
            
    const mediaCard = `
    <div>
        <a href="${media.getPath()}" title="ouvrir le media">
            ${media.getTypeOfMedia()}
        </a>
        <div class="infosMedia">
            <p>${media.title}</p>
            <button
                id="like-${media.id}"
                class="media-figure-figcaption-btn"
                aria-label="Ajouter un like au media : ${media.title}">
                <span id="nbr-likes-${media.id}" class="nbr-likes">${media.likes}</span> <i class="fa-regular fa-heart like-icon"></i>
            </button>
        </div>
    </div>
    `;

    article.innerHTML = mediaCard;
    return article;
}

function getLightbox(media) {
    const lightbox = document.createElement("dialog");
    lightbox.id = 'lightbox';

    const lightboxContainer = generateInnerHtmlLightBox(media);

    lightbox.innerHTML = lightboxContainer;
    return lightbox;
}

function generateInnerHtmlLightBox(media) {
    return  `<div class="lightboxContent">
    <a href="${media.getPath()}" title="ouvrir le media">
    ${media.getTypeOfMedia()}
    </a>
    <button class="closeLightbox" aria-label="Fermeture modal"><i class="fas fa-times"></i></button>
    <p class="lightboxTitle">${media.title}</p>
    <button class="prev"><span  aria-label="Media précédent"><i class="fas fa-angle-left"></i></span></button>
    <button class="next"><span  aria-label="Media suivant"><i class="fas fa-angle-right"></i></span></button>
</div>
`
}

function filters() {
    const div = document.createElement('div');
    div.classList.add('filters');
    div.setAttribute('type', 'menubar')

    const filter = `
        <p>Trier par </p>
        <div class="filtersContainer">
            <i class="fa-solid fa-chevron-up chevronFilter"></i>
            <ul class="filtersUl">
                <li><button type="menuitem" id="popularFilter"><span>Popularité</span></button></li>
                <li><button type="menuitem" id="dateFilter"><span>Date</span></button></li>
                <li><button type="menuitem" id="titleFilter"><span>Titre</span></button></li>
            </ul>
        </div>
    `;

    div.innerHTML = filter;
    filterAnimation(div);
    return div;
}

// Fonction affichage total des likes + prix
function getLikesAndPrice(photographer) {

    const div = document.createElement('div');
    div.classList.add('likes-price');

    const likesPriceLabel = `
        <p>
            <span class="totalLikeNumber" aria-label="total de likes"></span> 
            <span><i class="fa-solid fa-heart"></i></span>
            <span aria-label="tarif journalier">${photographer.price}€/jour</span> 
        </p>
        `

        div.innerHTML = likesPriceLabel;
        return div;
}