'use strict';

/** Numbers in the middle of two numbers */

let numberOne = Number(prompt('Enter number one'), 0);
let numberTwo = Number(prompt('Enter number two'), 0);

while (numberTwo < numberOne) {
    alert('Cannot calculate numbers in between. Enter new values');
    numberOne = Number(prompt('Enter number one'), 0);
    numberTwo = Number(prompt('Enter number two'), 0);
}

document.write(`<h1>From ${numberOne} to ${numberTwo}</h1>`);

for (let i = numberOne; i <= numberTwo; i += 1) {
    document.write(`<span>${i}</span><hr/>`);
}