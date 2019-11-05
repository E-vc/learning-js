'use strict';

/** Functions - A function is a code snippet */

function calculator() {
    console.log('console.log');
    return 'Hello, I am Calculator!';
}

let result = calculator();

console.log(result);

/** With parameters */

function operation(numberOne, numberTwo, show = false) {
    if (show) {
        let sum = numberOne + numberTwo;
        let substract = numberOne - numberTwo;
        return `${sum} - ${substract}`;
    } else {
        let multiply = numberOne * numberTwo;
        let divide = numberOne / numberTwo;
        return `${multiply} - ${divide}`;
    }
}

let value = operation(23, 54);

document.write(value);

for (let i = 0; i < 10; i += 1) {
    console.log(i);
    calculator();
    document.write(operation(i, 9, true));
}