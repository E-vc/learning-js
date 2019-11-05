'use strict';

/** Anonymous function */

let movie = function (name) {
    return name;
}

console.log(movie('Titanic'));

/** Callbacks */

function operation(numberOne, numberTwo, show, sum) {
    let value = numberOne + numberTwo;
    show(value);
    sum(value);
    return value;
}

console.log(operation(32, 4, function (data) {
    console.log(`The sum is ${data}`);
    /** Arrow function (function or =>) */
}, (data) => {
    console.log(`The sum for two is ${data * 2}`);
}));