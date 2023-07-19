
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
            <p>
                <span class="likeNumber">${media.likes}</span> 
                <span><i class="fa-solid fa-heart likeLogo" aria-label="Coeur, Cliquez ici pour aimer"></i><span>
            </p>
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
    <button class="closeLightbox" aria-label="Bouton fermeture modal"><i class="fas fa-times"></i></button>
    <p class="lightboxTitle">${media.title}</p>
    <span class="prev" aria-label="Bouton media précédent"><i class="fas fa-angle-left"></i></span>
    <span class="next" aria-label="Bouton media suivant"><i class="fas fa-angle-right"></i></span>
</div>
`
}

function filters() {
    const div = document.createElement('div');
    div.classList.add('filters');

    const filter = `
        <p>Trier par </p>
        <div class="filtersContainer">
            <i class="fa-solid fa-chevron-up chevronFilter"></i>
            <ul class="filtersUl">
                <li><button id="popularFilter"><span>Popularité</span></button></li>
                <li><button id="dateFilter"><span>Date</span></button></li>
                <li><button id="titleFilter"><span>Titre</span></button></li>
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