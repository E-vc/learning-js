'use strict';

/** DOM - Document Object Model */

let container = document.getElementById('container'); // Tag div
console.log(container);

container.innerHTML = 'New content div'; // Content div - Change content div

container.style.background = 'violet'; // Style in element container
container.style.color = 'white';
container.style.padding = '20px';

container.className = 'class'; // Class in element container

let content = document.querySelector('#content'); // Query selector
console.log(content);

function changeColor(color) {
    container.style.color = color;
    content.style.background = color;
}

/** Gets element for tag */
let allDiv = document.getElementsByTagName('div');
console.log(allDiv);

let text = allDiv[2].textContent;
console.log(text);

for (let div of allDiv) {
    let paragraph = document.createElement('p');
    let text = document.createTextNode(div.textContent);
    paragraph.append(text);
    document.querySelector('#section').prepend(paragraph);
}

/** Gets element for class */
let allClass = document.getElementsByClassName('class');
console.log(allClass);

let oneClassQuery = document.querySelector('div.class');
console.log(oneClassQuery);

let allClassQuery = document.querySelectorAll('div.class');
console.log(allClassQuery);