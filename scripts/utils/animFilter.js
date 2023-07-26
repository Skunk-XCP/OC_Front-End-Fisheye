/* eslint-disable no-unused-vars */

function filterAnimation(div) {
    const chevronFilter = div.querySelector(".chevronFilter");
    const filtersContainer = div.querySelector(".filtersContainer");
    const filtersUl = div.querySelector(".filtersUl");

    // Vérifie si tous les éléments requis sont présents
    if (chevronFilter && filtersContainer && filtersUl) {
        // Écoute l'événement de touche "Enter" (pour la navigation au clavier) sur chevronFilter
        chevronFilter.addEventListener("keydown", function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                // Appelle la fonction "toggleFilter" pour ouvrir ou fermer la liste des filtres
                toggleFilter(this, filtersContainer, filtersUl);
                // Met le focus sur chevronFilter pour la navigation au clavier
                chevronFilter.focus();
            }
        });

        // Écoute l'événement de clic sur chevronFilter pour ouvrir ou fermer la liste des filtres
        chevronFilter.addEventListener("click", function () {
            toggleFilter(this, filtersContainer, filtersUl);
        });

        // Récupère tous les boutons dans la liste des filtres
        const filterButtons = div.querySelectorAll(".filtersUl button");
        filterButtons.forEach((button, index) => {
            // Écoute l'événement de touche "Enter" (pour la navigation au clavier) sur chaque bouton
            button.addEventListener('keydown', function(event) {
                event.stopPropagation();
                if (event.key === 'Enter') {
                    if (index === 0 && !filtersContainer.classList.contains("expanded")) {
                        event.preventDefault();
                        // Si le premier bouton est pressé et la liste n'est pas déployée,
                        // appelle la fonction "toggleFilter" pour ouvrir la liste des filtres
                        toggleFilter(chevronFilter, filtersContainer, filtersUl);
                    } else {
                        // Sinon, empêche le déplacement vers le bas pour permettre la navigation au clavier
                        event.preventDefault();
                        // Simule un clic sur le bouton pour activer le filtre sélectionné
                        this.click();
                    }
                }
            });

            // Écoute l'événement de clic sur chaque bouton pour activer le filtre sélectionné
            button.addEventListener("click", function () {
                // Enlève la classe "selected" de tous les boutons pour les réinitialiser visuellement
                filterButtons.forEach((btn) => {
                    btn.classList.remove("selected");
                });

                // Ajoute la classe "selected" au bouton cliqué pour le mettre en surbrillance visuellement
                this.classList.add("selected");

                // Déplace le bouton cliqué en haut de la liste pour le maintenir visible après le clic
                filtersUl.insertBefore(this.parentElement, filtersUl.firstChild);

                // Ferme le menu de filtres s'il est déployé pour une meilleure expérience utilisateur
                if (filtersContainer.classList.contains("expanded")) {
                    toggleFilter(chevronFilter, filtersContainer, filtersUl);
                }

                // Met le focus sur chevronFilter pour la navigation au clavier
                chevronFilter.focus();
            });
        });
    }
}


function toggleFilter(chevronFilter, filtersContainer, filtersUl) {
    // Inverse la classe "rotated" sur l'élément "chevronFilter"
    chevronFilter.classList.toggle("rotated");
    // Ajoute ou supprime la classe "expanded" sur "filtersContainer" pour ouvrir ou fermer la liste
    filtersContainer.classList.toggle("expanded");
    // Ajoute ou supprime la classe "expanded" sur "filtersUl" pour afficher ou masquer les éléments de la liste
    filtersUl.classList.toggle("expanded");

    // Vérifie si la hauteur actuelle de "filtersContainer" est différente de 207px
    if (filtersContainer.style.height !== "207px") {
        // Si la liste n'est pas encore déployée, la hauteur de "filtersContainer" est définie à 207px
        filtersContainer.style.height = "207px";

        // Affiche tous les éléments de la liste (liens) en définissant leur affichage sur "block"
        Array.from(filtersUl.children).forEach((li) => {
            li.style.display = "block";
        });

        // Ajoute la classe 'lines' à la liste quand elle est déployée
        filtersUl.classList.add("lines");
    } else {
        // Si la liste est déjà déployée (hauteur égale à 207px), on la rétracte en définissant la hauteur à 69px
        filtersContainer.style.height = "69px";

        // Masque tous les éléments de la liste à l'exception du premier (index 0)
        Array.from(filtersUl.children).forEach((li, i) => {
            if (i !== 0) {
                li.style.display = "none";
            }
        });

        // Retire la classe 'lines' de la liste quand elle est rétractée
        filtersUl.classList.remove("lines");
        
        // Renvoie le focus au premier bouton de la liste pour une meilleure accessibilité
        const firstButton = filtersUl.querySelector('button');
        if (firstButton) firstButton.focus();
    }
}


