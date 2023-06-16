function getMediaCardDOM(media) {
    const article = document.createElement( 'article' );
    article.classList.add("mediaArticle");
            
    const mediaCard = `
    <div>
        <a href="photographer.html?id=${media.id}">
            ${typeOfMedia(media)}
        </a>
        <div class="infosMedia">
            <h3>${media.title}</h3>
            <p>
                <span>${media.likes}</span>
                <span><i class="fa-solid fa-heart"></i></span>
            </p>
        </div>
    </div>
    `;

    article.innerHTML = mediaCard;
    return article;


}

function typeOfMedia(media) {
    new TypeMediaFactory(media);
    if (media.image) {
        return `<img src="${media.image}" alt="${media.title}">`
    } else if (media.video) {
        return `<video src="${media.video}" aria-label="${media.title}" control="true" poster=""></video>`
    }
}

export { getMediaCardDOM }