import {validarInput} from './validar.js';

window.onload = function() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validarInput(input);
        });
    });
};