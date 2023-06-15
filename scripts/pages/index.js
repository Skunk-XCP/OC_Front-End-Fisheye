import { getUserCardDOM } from "../utils/photographerUtils.js";

async function getPhotographers() {
  const response = await fetch("../data/photographers.json");
  const data = await response.json();
  const photographers = data.photographers;
  return photographers;
}

function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const userCardDOM = getUserCardDOM(photographer);
    console.log(userCardDOM);
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
