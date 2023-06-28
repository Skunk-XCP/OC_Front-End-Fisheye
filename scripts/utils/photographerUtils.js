function getUserCardDOM(photographer) {
    const article = document.createElement( 'article' );
    article.classList.add("photographer-card");
            
    const photographerCard = `
        <a href="photographer.html?id=${photographer.id}" aria-label="Lien vers la page de ${photographer.name}">
            <img src="../../assets/photographers/${photographer.portrait}" alt="Photo de ${photographer.name}" >
            <h2>${photographer.name}</h2>
        </a>
        <p>${photographer.city}, ${photographer.country}</p>
        <p>${photographer.tagline}</p>
        <p>${photographer.price}/jour</p>
    `;

    article.innerHTML = photographerCard;
    return article;
}

function getPhotographerDOM(photographer) {

    const div = document.createElement( 'div' );
    div.classList.add("photograph-header");

    const photographerHeader = `
        <h1>${photographer.name}</h1>
        <p>${photographer.tagline}</p>
        <p>${photographer.city}, ${photographer.country}</p>
        <button class="contact_button modal_buttons" airia-label="Contacter photographe" aria-haspopup="dialog" aria-controls="dialog">Contactez-moi</button>
        <img src="${photographer.portrait}" alt="Photo de ${photographer.name}">
    `;

    div.innerHTML = photographerHeader;
    return div;
}




