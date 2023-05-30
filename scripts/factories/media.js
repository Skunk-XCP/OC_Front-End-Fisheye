function mediaFactory () {
    const {id, photographerId, title, image, likes, date, price} = data;

    const picture = `assets/${photographerId}/${image}`;
    const video = `assets/${photographerId}/${video}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute('media-data-id', data.id);

        const image = document.createElement(img);
        image.alt = '';
        article.appendChild(image);

        const imageTitle = document.createElement('h3');
        imageTitle.textContent = '';
        article.appendChild(imageTitle);


        
        return {article};
    }
    return {id, photographerId, title, image, likes, date, price, mediaFactory, getMediaCardDOM}
}

export { mediaFactory };