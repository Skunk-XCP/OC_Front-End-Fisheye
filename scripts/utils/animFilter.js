function filterAnimation(div) {
    const chevronFilter = div.querySelector(".chevronFilter");
    const filtersUl = div.querySelector(".filtersUl");

    if (chevronFilter && filtersUl) {
        chevronFilter.addEventListener("click", function() {
            toggleFilter(this, filtersUl);
        });

        // Ajoute un gestionnaire d'événements 'click' à chaque bouton de filtre
        const filterButtons = div.querySelectorAll(".filtersUl button");
        filterButtons.forEach((button) => {
            button.addEventListener("click", function() {
                // Simule un clic sur le chevron pour fermer la fenêtre de filtre
                chevronFilter.click();

                // Enlève la classe "selected" de tous les boutons
                filterButtons.forEach((btn) => {
                    btn.classList.remove("selected");
                });

                // Ajoute la classe "selected" au bouton cliqué
                this.classList.add("selected");

                // Déplace le bouton cliqué en haut de la liste
                filtersUl.prepend(this.parentElement);
            });
        });
    }
}


function toggleFilter(chevronFilter, filtersUl) {
    chevronFilter.classList.toggle("rotated");
    filtersUl.classList.toggle("expanded");

    if (filtersUl.classList.contains("expanded")) {
        filtersUl.children[0].children[0].classList.add("expanded");
        // Ajoute la classe "lines" lorsque la liste est dépliée
        filtersUl.classList.add("lines");
    } else {
        filtersUl.children[0].children[0].classList.remove("expanded");
        // Enlève la classe "lines" lorsque la liste est repliée
        filtersUl.classList.remove("lines");
    }
}
