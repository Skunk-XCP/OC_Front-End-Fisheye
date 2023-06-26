
function getMediaCardDOM(media) {
    const article = document.createElement( 'article' );
    article.classList.add("mediaArticle");
            
    const mediaCard = `
    <div>
        <a href="${media.getPath()}" title="ouvrir le media">
            ${media.getTypeOfMedia()}
        </a>
        <div class="infosMedia">
            <p>${media.title}</p>
            <p>
                <span>${media.likes}</span> 
                <span><i class="fa-solid fa-heart"></i><span>
            </p>
        </div>
    </div>
    `;

    article.innerHTML = mediaCard;
    return article;
}
