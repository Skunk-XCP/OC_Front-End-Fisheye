function mediaFactory () {
    const {id, photographerId, title, image, likes, date, price} = data;

    const mediaPicture = `assets/images/${photographerId}/${image}`;
    const mediaVideo = `assets/images/${photographerId}/${video}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );

        const mediaArtist = `
        <img src="${image}" alt="">
        <h3>${title}</h3>
        <span>${likes} <i class="media-heart fas fa-heart"></i></span>
        `;

        article.appendChild(mediaArtist);
        
        return {article};
    }
    return {id, photographerId, title, image, likes, date, price, mediaFactory, getMediaCardDOM}
}

export { mediaFactory };