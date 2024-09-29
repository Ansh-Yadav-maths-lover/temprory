// popup.js

// Create the overlay and content elements
const popupOverlay = document.createElement('div');
const popupContent = document.createElement('div');
const popupClose = document.createElement('button');

// Set classes for styling
popupOverlay.className = 'popup-overlay';
popupContent.className = 'popup-content';
popupClose.className = 'popup-close';

// Set inner content
popupClose.innerHTML = '&times;';
popupContent.innerHTML = '<img src="https://i.ibb.co/72h8f64/Say.gif" alt="Popup Image">';

// Append elements
popupContent.appendChild(popupClose);
popupOverlay.appendChild(popupContent);
document.body.appendChild(popupOverlay);

// CSS Styles
const style = document.createElement('style');
style.textContent = `
    /* Pop-up Styling */
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s;
    }

    .popup-overlay.active {
        visibility: visible;
        opacity: 1;
    }

    .popup-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 80%;
        position: relative;
    }

    .popup-content img {
        max-width: 100%;
        border-radius: 10px;
    }

    .popup-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #e74c3c;
        color: #fff;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 16px;
        cursor: pointer;
    }

    .popup-close:hover {
        background-color: #c0392b;
    }
`;
document.head.appendChild(style);

// Show pop-up function
function showPopup() {
    popupOverlay.classList.add('active');
}

// Hide pop-up function
function hidePopup() {
    popupOverlay.classList.remove('active');
}

// Event listener for close button
popupClose.addEventListener('click', hidePopup);

// Optional: Show the pop-up on first load
window.onload = showPopup;
