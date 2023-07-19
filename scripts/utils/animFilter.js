function filterAnimation(div) {
    const chevronFilter = div.querySelector(".chevronFilter");
    const filtersContainer = div.querySelector(".filtersContainer");
    const filtersUl = div.querySelector(".filtersUl");

    if (chevronFilter && filtersContainer && filtersUl) {
        chevronFilter.addEventListener("click", function () {
            toggleFilter(this, filtersContainer, filtersUl);
        });
    }

    // Ajoute un gestionnaire d'événements 'click' à chaque bouton de filtre
    // Ajoute un gestionnaire d'événements 'click' à chaque bouton de filtre
    const filterButtons = div.querySelectorAll(".filtersUl button");
    filterButtons.forEach((button) => {
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
    }
}
