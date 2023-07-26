/* eslint-disable no-undef */

// Fonction asynchrone pour obtenir les photographes depuis le fichier JSON
async function getPhotographers() {
  // Effectue une requête fetch pour récupérer les données depuis le fichier photographers.json
  const response = await fetch("../data/photographers.json");

  // Attend que la réponse soit résolue et récupère les données JSON
  const data = await response.json();

  // Récupère la liste des photographes depuis les données JSON
  const photographers = data.photographers;

  // Retourne la liste des photographes
  return photographers;
}


// Fonction pour afficher les données des photographes dans le DOM
function displayData(photographers) {
  // Sélectionne l'élément de la section des photographes dans le DOM
  const photographersSection = document.querySelector(".photographer_section");

  // Parcourt la liste des photographes
  photographers.forEach((photographer) => {
    // Génère le DOM pour la carte du photographe en utilisant la fonction getUserCardDOM()
    const userCardDOM = getUserCardDOM(photographer);

    // Ajoute la carte du photographe à la section des photographes dans le DOM
    photographersSection.appendChild(userCardDOM);
  });
}


// Fonction d'initialisation
async function init() {
  // Obtient la liste des photographes en utilisant la fonction getPhotographers() et attend la résolution de la promesse
  const photographers = await getPhotographers();

  // Affiche les données des photographes dans le DOM en utilisant la fonction displayData()
  displayData(photographers);
}

// Appelle la fonction d'initialisation pour afficher les données des photographes au chargement de la page
init();
