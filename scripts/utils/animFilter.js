function filterAnimation(div) {
    const chevronFilter = div.querySelector(".chevronFilter");
    const filtersUl = div.querySelector(".filtersUl");

    if (chevronFilter && filtersUl) {
        chevronFilter.addEventListener("click", function() {
            this.classList.toggle("rotated");
            filtersUl.classList.toggle("expanded");

            // ajouter une classe au premier bouton lorsque la liste est déployée
            if (filtersUl.classList.contains("expanded")) {
                filtersUl.children[0].children[0].classList.add("expanded");
            } else {
                filtersUl.children[0].children[0].classList.remove("expanded");
            }
        });
    }
}
