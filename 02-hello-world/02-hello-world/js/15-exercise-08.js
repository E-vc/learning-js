'use strict';

/** Calculator */

let numberOne = Number(prompt('Enter number one', 0));
let numberTwo = Number(prompt('Enter number two', 0));

while (numberOne === 0 || isNaN(numberOne) || numberTwo === 0 || isNaN(numberTwo)) {
    numberOne = Number(prompt('Enter number one', 0));
    numberTwo = Number(prompt('Enter number two', 0));
}

let sum = numberOne + numberTwo;
let substract = numberOne - numberTwo;
let multiply = numberOne * numberTwo;
let divide = numberOne / numberTwo;

let result = `
    <list>
        <ul>Sum: ${sum}</ul>
        <ul>Substract: ${substract}</ul>
        <ul>Multiply: ${multiply}</ul>
        <ul>Divide: ${divide}</ul>
    </list>
`;

document.write(result);