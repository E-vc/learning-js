'use strict';

/** higher, lower, or equal */

let numberOne = -3;
let numberTwo = -8;

do {
    numberOne += 1;
    numberTwo += 2;
    console.log(numberOne, numberTwo);
} while (numberOne <= 0 || numberTwo <= 0);

if (numberOne > numberTwo) {
    console.log(`${numberOne} is higher than ${numberTwo}`);
} else if (numberTwo > numberOne) {
    console.log(`${numberTwo} is higher than ${numberOne}`);
} else {
    console.log(`${numberOne} is equal to ${numberTwo}`);
}

/** -------------------------------------------------------- */

let number1 = Number(prompt('Enter the first number:', 0));
let number2 = parseInt(prompt('Enter the second number:', 0));

while (number1 <= 0 || isNaN(number1) || number2 <= 0 || isNaN(number2)) {
    number1 = parseInt(prompt('Enter the first number:', 0));
    number2 = Number(prompt('Enter the second number:', 0));
}

console.log(typeof number1, number1, typeof number2, number2);

if (number1 === number2) {
    alert('The numbers are equal.')
} else if (number1 > number2) {
    alert(`The number one is greater than the number two: ${number1} > ${number2}`);
} else if (number2 > number1) {
    alert(`The number two is greater than the number one: ${number2} > ${number1}`);
} else {
    alert('Enter correct numbers.')
}