function trapFocusIn(modal) {
    const handler = function (e) {
  
        let isTabPressed = e.key === "Tab";
        let isArrowRightPressed = e.key === "ArrowRight";
        let isArrowLeftPressed = e.key === "ArrowLeft";
  
        // Permet d'éviter le conflit avec les fleches qui
        // empechait la navigation dans la Lightbox avec celles-ci
        if (!isTabPressed || isArrowRightPressed || isArrowLeftPressed) {
            return;
        }
  
        if (!isTabPressed) {
            return;
        }
  
        let focusableElement = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        let firstFocusableElement = focusableElement[0];
        let lastFocusableElement = focusableElement[focusableElement.length - 1];
  
        if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
        } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
                // if focused has reached to last focusable element then focus first focusable element after pressing tab
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }
  
    };
  
    modal.addEventListener("keydown", handler);

    return handler;
}
