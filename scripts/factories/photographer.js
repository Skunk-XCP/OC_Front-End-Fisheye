function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add("photographer-card");
        
        const link = document.createElement( 'a' );
        link.setAttribute("href", `photographer.html?id=${id}`);

        const profilPic = document.createElement( 'img' );
        profilPic.setAttribute("src", picture)
        profilPic.alt= `Photo de ${name}`;

        const nameArtist = document.createElement( 'h2' );
        nameArtist.textContent = name;

        const living = document.createElement( 'p' );
        living.textContent = `${city}, ${country}`;

        const catchLine = document.createElement( 'p' );
        catchLine.textContent = tagline;

        const payment = document.createElement( 'p' );
        payment.textContent = `${price}€/jour`;
        
        article.appendChild(link);
        link.appendChild(profilPic);
        link.appendChild(nameArtist);
        article.appendChild(living);
        article.appendChild(catchLine);
        article.appendChild(payment);

        return (article);
    }

    function getPhotographerDOM() {

        const div = document.createElement( 'div' );
        div.classList.add("infoPhotographer");

        const profilPic = document.createElement( 'img' );
        profilPic.setAttribute("src", picture);
        profilPic.alt= `Photo de ${name}`;

        const nameArtist = document.createElement( 'h2' );
        nameArtist.textContent = name;

        const living = document.createElement( 'p' );
        living.textContent = `${city}, ${country}`;

        const catchLine = document.createElement( 'p' );
        catchLine.textContent = tagline;

        div.appendChild(nameArtist);
        div.appendChild(living);
        div.appendChild(catchLine);

        return {div, profilPic};
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM, getPhotographerDOM }
}

export { photographerFactory };