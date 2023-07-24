function filterAnimation(div) {
    const chevronFilter = div.querySelector(".chevronFilter");
    const filtersContainer = div.querySelector(".filtersContainer");
    const filtersUl = div.querySelector(".filtersUl");

    if (chevronFilter && filtersContainer && filtersUl) {
        chevronFilter.addEventListener("click", function () {
            toggleFilter(this, filtersContainer, filtersUl);
        });

        // Ajoute un gestionnaire d'événements 'keydown' à chaque bouton de filtre
        const filterButtons = div.querySelectorAll(".filtersUl button");
        filterButtons.forEach((button, index) => {
            button.addEventListener('keydown', function(event) {
                if (event.key === 'ArrowDown') {
                    if (index === 0 && !filtersContainer.classList.contains("expanded")) {
                        event.preventDefault();
                        toggleFilter(chevronFilter, filtersContainer, filtersUl);
                    } else if (index === (filterButtons.length - 1)) {
                        // Si c'est le dernier bouton, empêchez le déplacement vers le bas
                        event.preventDefault();
                    }
                }
            
                if (event.key === 'ArrowUp') {
                    if (index === 0) {
                        event.preventDefault();
                        if (filtersContainer.classList.contains("expanded")) {
                            toggleFilter(chevronFilter, filtersContainer, filtersUl);
                        }
                    } else if (index > 0) {
                        event.preventDefault();
                        filterButtons[index - 1].focus();
                    }
                }
            });

            button.addEventListener("click", function () {
                // Enlève la classe "selected" de tous les boutons
                filterButtons.forEach((btn) => {
                    btn.classList.remove("selected");
                });

                // Ajoute la classe "selected" au bouton cliqué
                this.classList.add("selected");

                // Déplace le bouton cliqué en haut de la liste
                filtersUl.insertBefore(this.parentElement, filtersUl.firstChild);

                // Ferme le menu de filtres
                if (filtersContainer.classList.contains("expanded")) {
                    toggleFilter(chevronFilter, filtersContainer, filtersUl);
                }
            });
        });
    }
}

function toggleFilter(chevronFilter, filtersContainer, filtersUl) {
    chevronFilter.classList.toggle("rotated");
    filtersContainer.classList.toggle("expanded");
    filtersUl.classList.toggle("expanded");

    if (filtersContainer.style.height !== "207px") {
        filtersContainer.style.height = "207px";
        Array.from(filtersUl.children).forEach((li) => {
            li.style.display = "block";
        });

        // Ajoute la classe 'lines' à la liste quand elle est déployée
        filtersUl.classList.add("lines");
    } else {
        filtersContainer.style.height = "69px";
        Array.from(filtersUl.children).forEach((li, i) => {
            if (i !== 0) {
                li.style.display = "none";
            }
        });

        // Retire la classe 'lines' de la liste quand elle est rétractée
        filtersUl.classList.remove("lines");
        
        // Renvoie le focus au premier bouton
        const firstButton = filtersUl.querySelector('button');
        if (firstButton) firstButton.focus();
    }
}

