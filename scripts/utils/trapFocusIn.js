/* eslint-disable no-unused-vars */

// Fonction pour gérer le focus à l'intérieur d'une modal et restreindre la navigation du clavier aux éléments de la modal uniquement
function trapFocusIn(modal) {
    // Fonction handler pour l'événement keydown
    const handler = function (e) {
        // Vérifie si la touche Tab est pressée
        let isTabPressed = e.key === "Tab";
        // Vérifie si la touche ArrowRight est pressée
        let isArrowRightPressed = e.key === "ArrowRight";
        // Vérifie si la touche ArrowLeft est pressée
        let isArrowLeftPressed = e.key === "ArrowLeft";

        // Si la touche Tab n'est pas pressée, ou si les touches ArrowRight ou ArrowLeft sont pressées, on ne fait rien
        if (!isTabPressed || isArrowRightPressed || isArrowLeftPressed) {
            return;
        }

        // Récupère tous les éléments focusables à l'intérieur de la modal
        let focusableElement = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        // Récupère le premier élément focusable de la modal
        let firstFocusableElement = focusableElement[0];
        // Récupère le dernier élément focusable de la modal
        let lastFocusableElement = focusableElement[focusableElement.length - 1];

        // Si la touche Shift + Tab est pressée et que l'élément actif est le premier élément focusable, on met le focus sur le dernier élément focusable
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault(); // Empêche le comportement par défaut du focus
            }
        }
        // Si la touche Tab est pressée et que l'élément actif est le dernier élément focusable, on met le focus sur le premier élément focusable
        else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                // Empêche le comportement par défaut du focus
                e.preventDefault(); 
            }
        }
    };

    // Ajoute un écouteur d'événement "keydown" à la modal, qui appelle la fonction handler lorsqu'une touche est pressée
    modal.addEventListener("keydown", handler);

    // Retourne la fonction handler, qui peut être utilisée pour supprimer ultérieurement l'écouteur d'événement
    return handler;
}
