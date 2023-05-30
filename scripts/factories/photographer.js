function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add("photographer-card");
                
        const photographerCard = `
            <a href="photographer.html?id=${id}">
            <img src="${picture}" alt="Photo de ${name}">
            <h2>${name}</h2></a>
            <p>${city}, ${country}</p>
            <p>${tagline}</p>
            <p>${price}</p>
        `;

        article.innerHTML = photographerCard;
        return article;
    }

    function getPhotographerDOM() {

        const div = document.createElement( 'div' );
        div.classList.add("infoPhotographer");

        const photographerHeader = `
        <div class="photograph-header">
            <h2>${name}</h2>
            <p>${tagline}</p>
            <p>${city}, ${country}</p>
            <button class="contact_button modal_buttons">Contactez-moi</button>
            <img src="${picture}" alt="Photo de ${name}">
        </div>
        `;

        div.innerHTML = photographerHeader;
        return div;
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM, getPhotographerDOM }
}

export { photographerFactory };