'use strict';

window.addEventListener('load', function () {

    let form = document.querySelector('#form');

    let dashed = document.getElementsByClassName('dashed');
    dashed[0].style.display = 'none';

    let alert = document.querySelector('.alert');
    alert.style.display = 'none';

    form.addEventListener('submit', function () {
        let name = document.querySelector('#firstname').value;
        let surname = document.querySelector('#lastname').value;
        let age = document.querySelector('#age').value;

        /** Validations */
        if (name.trim().length === 0 || surname.trim().length === 0) {
            alert.style.display = 'block';
            alert.innerHTML = 'Please provide a valid name and surname.';
            return false;
        } else {
            alert.style.display = 'none';
        }

        dashed[0].style.display = 'block';
        
        let data = [name, surname, age];
        for (let value in data) {
            let paragraph = document.createElement('p');
            paragraph.append(data[value]);
            dashed[0].append(paragraph);
        }
    });
});