
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

    const lightboxContainer = `
        <div class="lightboxContent">
            <span class="closeLightbox"><i class="fas fa-times"></i></span>
            <a href="${media.getPath()}" title="ouvrir le media">
                ${media.getTypeOfMedia()}
            </a>
            <p class="lightboxTitle">${media.title}</p>
            <span class="prev"><i class="fas fa-angle-left"></i></span>
            <span class="next"><i class="fas fa-angle-right"></i></span>
        </div>
    `;

    lightbox.innerHTML = lightboxContainer;
    return lightbox;
}

function filters() {
    const div = document.createElement('div');
    div.classList.add('filters');

    const filter = `
        <p>Trier par </p>
        <div>
            <i class="fa-solid fa-chevron-up chevronFilter"></i>
            <ul>
                <li class="popularFilter"><button>Popularité<span></span></button></li>
                <li class="dateFilter"><button>Date</button></li>
                <li class="titleFilter"><button>Titre</button></li>
            </ul>
        </div>
        
    `;

    div.innerHTML = filter;
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