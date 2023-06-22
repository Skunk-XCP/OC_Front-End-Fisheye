
function getMediaCardDOM(media) {
    const article = document.createElement( 'article' );
    article.classList.add("mediaArticle");
            
    const mediaCard = `
    <div>
        <a href="${srcMedia(media)}" title="ouvrir le media">
            ${typeOfMedia(media)}
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

// function typeOfMedia(media) {
//     if (media._image) {
//         return `<img src="${media.image}" alt="${media.title}">`
//     } else if (media._video) {
//         return `<video src="${media.video}" aria-label="${media.title}" controls="true" poster=""></video>`
//     }
// }

// function srcMedia(media) {
//     if (media._image) {
//         return `${media.image}`
//     } else if (media._video) {
//         return `${media.video}`
//     }
// }


function typeOfMedia(media) {
    if (media instanceof Image) {
        const imagePath = media.getImagePath(); // Appel de la méthode getImagePath() pour Image
        return `<img src="${imagePath}" alt="${media.title}">`;
    } else if (media instanceof Video) {
        const videoPath = media.getVideoPath(); // Appel de la méthode getVideoPath() pour Video
        return `<video src="${videoPath}" aria-label="${media.title}" controls="true" poster=""></video>`;
    }
}

function srcMedia(media) {
    if (media instanceof Image) {
        const imagePath = media.getImagePath(); // Appel de la méthode getImagePath() pour Image
        return `${imagePath}`;
    } else if (media instanceof Video) {
        const videoPath = media.getVideoPath(); // Appel de la méthode getVideoPath() pour Video
        return `${videoPath}`;
    }
}




export { getMediaCardDOM }