/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

class Lightbox {
    constructor(lightboxElement, galleryElements, mediaPhotographer, index) {
        this.lightboxElement = lightboxElement;

        // Tableau de tous les éléments de la galerie
        this.galleryElements = galleryElements; 

        // Média actuellement affiché dans la lightbox
        this.mediaPhotographer = mediaPhotographer; 

        // Index de l'élément actuellement affiché dans la lightbox
        this.currentElement = index; 
    }

    // Méthode pour afficher la lightbox
    show() {
        // Affiche la lightbox en changeant son style 'display' à 'block'
        this.lightboxElement.style.display = 'block';

        // Met le focus sur le lien à l'intérieur de la lightbox pour le rendre focalisable
        document.querySelector(".lightboxContent a").focus();

        // Ajoute des gestionnaires d'événements pour le bouton 'Suivant'
        let nextButton = this.lightboxElement.querySelector('.next');
        nextButton.addEventListener('click', this.goToNext.bind(this));

        // Ajoute des gestionnaires d'événements pour le bouton 'Précédent'
        let prevButton = this.lightboxElement.querySelector('.prev');
        prevButton.addEventListener('click', this.goToPrev.bind(this));

        document.addEventListener('keydown', (e) => {
            e.stopPropagation();
            if (e.key === 'ArrowRight') {
                // Appelle la méthode pour afficher le média suivant avec la flèche droite
                this.goToNext(); 
            } else if (e.key === 'ArrowLeft') {
                // Appelle la méthode pour afficher le média précédent avec la flèche gauche
                this.goToPrev(); 
            } else if (e.key === 'Escape') {
                // Appelle la méthode pour fermer la lightbox en appuyant sur la touche 'Echap'
                this.close(); 
            }
        });

        // Ajoute un gestionnaire d'événement pour le bouton de fermeture de la lightbox
        let closeLightbox = this.lightboxElement.querySelector('.closeLightbox');
        closeLightbox.addEventListener('click', this.close.bind(this));

        // Appelle la fonction trapFocusIn pour gérer la navigation au clavier dans la lightbox
        trapFocusIn(this.lightboxElement);

        // Annule le curseur pointer au survol de l'image pour éviter une confusion avec un lien cliquable
        let lightboxContent = this.lightboxElement.querySelector('.lightboxContent a');
        lightboxContent.style.cursor = 'default';

        // Ajoute un gestionnaire d'événement pour empêcher l'ouverture de l'image dans un nouvel onglet lors du clic dans la lightbox
        let lightboxLink = this.lightboxElement.querySelector('.lightboxContent a');
        lightboxLink.addEventListener('click', function (event) {
            event.preventDefault();
        });
    }

    // Méthode pour afficher le média suivant dans la lightbox
    goToNext() {
        this.currentElement++;

        if (this.currentElement >= this.galleryElements.length) {
            // Reviens au premier élément si on dépasse la fin du tableau
            this.currentElement = 0; 
        }
        
        // Met à jour le média affiché dans la lightbox
        this.mediaPhotographer = this.galleryElements[this.currentElement]; 
        // Met à jour le contenu de la lightbox avec le média suivant
        this.updateContent(); 
    }

    // Méthode pour afficher le média précédent dans la lightbox
    goToPrev() {
        this.currentElement--;

        if (this.currentElement < 0) {
            // Reviens au dernier élément si on dépasse le début du tableau
            this.currentElement = this.galleryElements.length - 1; 
        }

        // Met à jour le média affiché dans la lightbox 
        this.mediaPhotographer = this.galleryElements[this.currentElement]; 
        // Met à jour le contenu de la lightbox avec le média précédent
        this.updateContent(); 
    }

    // Méthode pour fermer la lightbox
    close() {
        // Supprime la lightbox du DOM
        this.lightboxElement.remove(); 

        // Retire la classe 'lightbox-active' du <body>
        document.body.classList.remove('lightbox-active'); 

        // Supprime l'écouteur d'événement pour la navigation au clavier
        this.lightboxElement.removeEventListener('keydown', this.trapFocusIn); 
    }

    // Méthode pour mettre à jour le contenu de la lightbox avec le média actuellement affiché
    updateContent() {
        const lightboxContent = this.lightboxElement.querySelector('.lightboxContent');
        const lightboxMedia = lightboxContent.querySelector('a');
        const lightboxTitle = lightboxContent.querySelector('.lightboxTitle');

        // Met à jour le contenu de la lightbox avec le média actuel
        lightboxMedia.innerHTML = this.mediaPhotographer.getTypeOfMedia(); 
        // Met à jour le titre de la lightbox avec le titre du média
        lightboxTitle.textContent = this.mediaPhotographer.title; 

        // Si le média actuel est une vidéo, ajoute l'attribut 'controls' pour afficher les contrôles de lecture vidéo
        if (this.mediaPhotographer instanceof Video) {
            const videoElement = lightboxMedia.querySelector('video');
            if (videoElement) {
                videoElement.setAttribute('controls', '');
            }
        }
    }
}
