const main = document.getElementById('main');
main.setAttribute("aria-hidden", "false");
let contactButton = document.querySelector('.contact_button');
const contactModal = document.getElementById('contact_modal');
const closeBtn = document.querySelector('.closeBtn');


// Fonction pour afficher la modal
function openModal() {
  contactModal.style.display = 'block';
  contactButton.style.display = 'none'
  main.setAttribute("aria-hidden", "true");
}

// Fonction pour masquer la modal
function closeModal() {
  contactModal.style.display = 'none';
  contactButton.style.display = 'block'
}

// On ajoute un écouteur d'événement à un élément (brut) du HTML
// La fonction fléchée est déclenchée avec l'événement "e" en tant que paramètre
main.addEventListener('click', (e) => {
  // e.target permet d'obtenir l'élément spécifique sur lequel on a cliqué (ici le bouton)
  contactButton = e.target;
  //  Condition qui vérifie si la classe de l'élément cliqué contient la classe "contact_button" (booléen)
  if (contactButton.classList.contains("contact_button")) {
    openModal();
  }
})

closeBtn.addEventListener('click', closeModal);

const formElement = document.querySelector('form');

const createForm = `
  <div>
    <label for="firstname"></label>
    <input id="firstname" type="text" name="firstname" required="required" aria-required="true">
  </div>
  <div>
    <label for="lastname"></label>
    <input id="lastname" type="text" name="lastname" required="required" aria-required="true">
  </div>
  <div>
    <label for="email"></label>
    <input id="email" type="email" name="email" required="required" aria-required="true">
  </div>
  <div>
    <label for="message"></label>
    <textarea id="message" name="message" required="required" aria-required="true" rows="4"></textarea>
  </div>
  <div>
    <button class="sendBtn modal_buttons">Envoyer</button>
  </div>
`;

formElement.innerHTML = createForm;

// Initialisation de la variable d'envoi
let isSubmitted = false;

// Récupération des inputs à l'envoi du formulaire
formElement.addEventListener('submit', (e) => {

  e.preventDefault();

  let firstnameValue = document.getElementById('firstname').value;
  let lastnameValue = document.getElementById('lastname').value;
  let emailValue = document.getElementById('email').value;
  let messageValue = document.getElementById('message').value;

  console.log('Prénom:', firstnameValue);
  console.log('Nom:', lastnameValue);
  console.log('Email:', emailValue);
  console.log('Message:', messageValue);

  isSubmitted = true;
})

// Réinitialiser le form à la fermeture
function sendForm() {
  if (isSubmitted) {
    formElement.reset();
    closeModal();
  }
}

formElement.addEventListener('submit', sendForm);