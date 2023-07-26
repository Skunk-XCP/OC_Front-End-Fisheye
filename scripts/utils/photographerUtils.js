/* eslint-disable no-unused-vars */

// Fonction pour créer et afficher la carte de profil d'un photographe sur la page d'accueil
function getUserCardDOM(photographer) {

    // Crée un nouvel élément <article> pour représenter la carte de profil du photographe
    const article = document.createElement('article');
    article.classList.add("photographer-card"); 

    // Génère le contenu HTML de la carte de profil en utilisant les propriétés du photographe
    const photographerCard = `
        <a href="photographer.html?id=${photographer.id}" aria-label="Lien vers la page de ${photographer.name}">
            <img src="../../assets/photographers/${photographer.portrait}" alt="Photo de ${photographer.name}" >
            <h2>${photographer.name}</h2>
        </a>
        <p>${photographer.city}, ${photographer.country}</p>
        <p>${photographer.tagline}</p>
        <p>${photographer.price}€/jour</p>
    `;

    // Insère le contenu HTML généré dans l'élément <article> de la carte de profil en utilisant 'innerHTML'
    article.innerHTML = photographerCard;

    // Retourne l'élément <article> représentant la carte de profil avec son contenu interne
    return article;
}

// Fonction pour créer et afficher le profil d'un photographe sur la page Photographe
function getPhotographerDOM(photographer) {
    // Fonction pour créer et afficher l'en-tête du photographe dans la page photographe

    // Crée un nouvel élément <div> pour représenter l'en-tête du photographe
    const div = document.createElement('div');
    // Ajoute la classe CSS "photograph-header" à l'en-tête du photographe
    div.classList.add("photograph-header"); 

    // Génère le contenu HTML de l'en-tête du photographe en utilisant les propriétés du photographe
    const photographerHeader = `
        <h2>${photographer.name}</h2>
        <p>${photographer.tagline}</p>
        <p>${photographer.city}, ${photographer.country}</p>
        <button class="contact_button modal_buttons" aria-label="Contacter photographe" aria-haspopup="dialog" aria-controls="contact_modal">Contactez-moi</button>
        <img src="${photographer.portrait}" alt="Photo de ${photographer.name}">
    `;

    // Insère le contenu HTML généré dans l'élément <div> de l'en-tête du photographe en utilisant 'innerHTML'
    div.innerHTML = photographerHeader;

    // Retourne l'élément <div> représentant l'en-tête du photographe avec son contenu interne
    return div;
}
