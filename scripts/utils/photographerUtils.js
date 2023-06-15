    function getUserCardDOM(photographer) {
        const article = document.createElement( 'article' );
        article.classList.add("photographer-card");
                
        const photographerCard = `
            <a href="photographer.html?id=${photographer.id}">
            <img src="../../assets/photographers/${photographer.portrait}" alt="Photo de ${photographer.name}">
            <h2>${photographer.name}</h2></a>
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
            <h2>${photographer.name}</h2>
            <p>${tagline}</p>
            <p>${city}, ${country}</p>
            <button class="contact_button modal_buttons">Contactez-moi</button>
            <img src="${picture}" alt="Photo de ${photographer.name}">
        `;

        div.innerHTML = photographerHeader;
        return div;
    }

export { getUserCardDOM, getPhotographerDOM };
