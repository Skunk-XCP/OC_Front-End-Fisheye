import { photographerFactory } from "../factories/photographer.js";

const main = document.querySelector('main');
main.setAttribute("aria-hidden","false");
const contactButton = document.querySelector('.contact_button');
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

// Ajouter un écouteur d'événement sur le bouton
contactButton.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

// ajouter un setattribute dialog




const formElement = document.querySelector('form');

const divElement = document.createElement('div');




const labels = ['Prénom', 'Nom'];

for (let i = 0 ; i < labels.length ; i++) {
    // Créer l'élément input
    const inputElement = document.createElement('input');

    inputElement.setAttribute('id', labels[i]);
    inputElement.setAttribute('type', 'text');
    inputElement.name = labels[i].toLowerCase();
    inputElement.setAttribute('required', 'required');
    inputElement.setAttribute('aria-required', 'true');

    // Créer l'élément label
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', labels[i]);
    labelElement.textContent = labels[i];

    // Ajouter le label et input à l'élément div
    divElement.appendChild(labelElement);
    divElement.appendChild(inputElement);

    // Ajouter la div à un parent existant 
    formElement.appendChild(divElement);
}

    // Créer l'élément input email
    const emailInputElement = document.createElement('input');

    emailInputElement.setAttribute('id', "email");
    emailInputElement.setAttribute('type', 'email');
    emailInputElement.name = "email";
    emailInputElement.setAttribute('required', 'required');
    emailInputElement.setAttribute('aria-required', 'true');

    // Créer l'élément label email
    const emailLabelElement = document.createElement('label');
    emailLabelElement.setAttribute('for', "email");
    emailLabelElement.textContent = "Email";

    divElement.appendChild(emailLabelElement);
    divElement.appendChild(emailInputElement);
    formElement.appendChild(divElement);

    // Créer l'élément input message
    const messageInputElement = document.createElement('textarea');

    messageInputElement.setAttribute("id", "message");
    messageInputElement.name = "message";
    messageInputElement.setAttribute('required', 'required');
    messageInputElement.setAttribute('aria-required', 'true');
    messageInputElement.setAttribute('rows', 4);

    // Créer l'élément label message
    const messageLabelElement = document.createElement('label');

    messageLabelElement.setAttribute('for', 'message');
    messageLabelElement.textContent = "Votre message"

    divElement.appendChild(messageLabelElement);
    divElement.appendChild(messageInputElement);
    formElement.appendChild(divElement)

    // Créer le bouton d'envoi

    const sendBtn = document.createElement('button');
    sendBtn.classList.add('sendBtn', 'modal_buttons')

    sendBtn.textContent = "Envoyer";

    divElement.appendChild(sendBtn);