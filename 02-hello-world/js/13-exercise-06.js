'use strict';

/** Odd or Pair */

let number = Number(prompt('Enter a number', 0));

while (number === 0 || isNaN(number)) {
    number = Number(prompt('Enter a number', 0));
}

if (number % 2 === 0) {
    alert(`The ${number} is pair.`);
} else {
    alert(`The ${number} is odd.`);
}