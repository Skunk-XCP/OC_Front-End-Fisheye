const main = document.getElementById('main');
main.setAttribute("aria-hidden", "false");
let contactButton = document.querySelector('.contact_button');
const contactModal = document.getElementById('contact_modal');
const closeBtn = document.querySelector('.closeBtn');
let focusTrap = null;


// Fonction pour afficher la modal
function openModal() {
  contactModal.style.display = 'block';
  contactButton.style.display = 'none'
  document.querySelector('.closeBtn').focus();
  main.setAttribute("aria-hidden", "true");
  focusTrap = trapFocusIn(contactModal);
}

// Fonction pour masquer la modal
function closeModal() {
  contactModal.style.display = 'none';
  contactButton.style.display = 'block'
  contactModal.removeEventListener('keydown', focusTrap);
  focusTrap = null;
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
contactModal.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
}
});

const formElement = document.querySelector('form');

const createForm = `
  <div>
    <label for="firstname">Prénom</label>
    <input id="firstname" type="text" name="firstname" placeholder="Saisissez votre prénom" aria-labelledby="firstname" required="required" aria-required="true">
  </div>
  <div>
    <label for="lastname">Nom</label>
    <input id="lastname" type="text" name="lastname" placeholder="Saisissez votre nom" aria-labelledby="lastname" required="required" aria-required="true">
  </div>
  <div>
    <label for="email">E-mail</label>
    <input id="email" type="email" name="email" placeholder="Saisissez votre adresse email" aria-labelledby="email" required="required" aria-required="true">
  </div>
  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message" required="required" placeholder="Saisissez votre message" aria-labelledby="message" aria-required="true" rows="4"></textarea>
  </div>
  <div>
    <button class="sendBtn modal_buttons" aria-label="envoyer le formulaire">Envoyer</button>
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