/* eslint-disable no-undef */

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
  document.body.classList.add('modal-open-scroll');
  document.querySelector('main').classList.add('modal-open-background');
  focusTrap = trapFocusIn(contactModal);
}

// Fonction pour masquer la modal
function closeModal() {
  contactModal.style.display = 'none';
  contactButton.style.display = 'block'
  contactModal.removeEventListener('keydown', focusTrap);
  document.body.classList.remove('modal-open-scroll');
  document.querySelector('main').classList.remove('modal-open-background');
  focusTrap = null;
  // Déplacez le focus vers le bouton contactButton après avoir fermé la modale
  contactButton.focus();

}

// On ajoute un écouteur d'événement à un élément du HTML
// La fonction fléchée est déclenchée avec l'événement "e" en tant que paramètre
main.addEventListener('click', (e) => {
  // e.target permet d'obtenir l'élément spécifique sur lequel on a cliqué (ici le bouton)
  contactButton = e.target;
  //  Condition qui vérifie si la classe de l'élément cliqué contient la classe "contact_button" (booléen)
  if (contactButton.classList.contains("contact_button")) {
    openModal();
  }
})


// Associe la fonction closeModal au clic sur le bouton de fermeture
closeBtn.addEventListener('click', closeModal);



// Associe la fonction closeModal à l'appui de la touche 'Escape' dans la modal
contactModal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});


// Sélectionne le formulaire dans le DOM
const formElement = document.querySelector('form');


// Génère le contenu HTML du formulaire en utilisant une chaîne de texte (createForm)
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

// Insère le contenu HTML généré dans le formulaire en utilisant 'innerHTML'
formElement.innerHTML = createForm;


// Initialisation de la variable d'envoi
let isSubmitted = false;


// Gestionnaire d'événements lors de la soumission du formulaire
formElement.addEventListener('submit', (e) => {

  // Empêche le rechargement de la page après la soumission du formulaire
  e.preventDefault();

  // Récupère les valeurs des champs du formulaire
  let firstnameValue = document.getElementById('firstname').value;
  let lastnameValue = document.getElementById('lastname').value;
  let emailValue = document.getElementById('email').value;
  let messageValue = document.getElementById('message').value;

  // Affiche les valeurs des champs dans la console
  console.log('Prénom:', firstnameValue);
  console.log('Nom:', lastnameValue);
  console.log('Email:', emailValue);
  console.log('Message:', messageValue);

  // Indique que le formulaire a été soumis
  isSubmitted = true;
})


// Fonction pour envoyer le formulaire après soumission
function sendForm() {
  // Vérifie si le formulaire a été soumis (isSubmitted vaut true)
  if (isSubmitted) {
      // Réinitialise le contenu du formulaire
      formElement.reset();
      
      // Ferme la modal
      closeModal();
      contactButton.focus();
  }
}


// Associe la fonction sendForm à l'événement de soumission du formulaire
formElement.addEventListener('submit', sendForm);
