'use strict';

/** Events */

/** The load event is fired when the whole page has loaded. */
window.addEventListener('load', () => {

    /** Mouse Event (onclick - ondblclick) */
    let button = document.querySelector('#button');

    function changeColor() {
        button.style.background = button.style.background === 'turquoise' ? 'violet' : 'turquoise';
        button.style.padding = '12px';
        button.style.border = '1px solid #ccc';
    }

    /** AddEventListener - click */
    // button.addEventListener('click', changeColor);
    button.addEventListener('click', function () {
        changeColor();
        this.style.margin = '10px';
    });
    
    /** AddEventListener - mouseover */
    button.addEventListener('mouseover', () => button.style.background = 'darkmagenta');

    /** AddEventListener - mouseout */
    button.addEventListener('mouseout', () => button.style.background = 'darkslategray');

    /** ------------------------------------------------------------------------------------------- */

    /** Key Events */
    let input = document.querySelector('#name');

    /** AddEventListener - focus */
    input.addEventListener('focus', () => console.log('[focus] - You are inside the input'));

    /** AddEventListener - blur */
    input.addEventListener('blur', () => console.log('[blur] - You are out of the input'));

    /** AddEventListener - keydown */
    input.addEventListener('keydown', (event) => {
        console.log('[keydown] - You are pressing this key', String.fromCharCode(event.keyCode));
    });

    /** AddEventListener - keypress */
    input.addEventListener('keypress', (event) => {
        console.log('[keypress] - Key pressed', String.fromCharCode(event.keyCode));
    });

    /** AddEventListener - keyup */
    input.addEventListener('keyup', () => {
        console.log('[keyup] - Key unpressed', String.fromCharCode(event.keyCode));
    });
});