'use strict';

/** Scope of variables */


function greeting(text) {
    let string = 'Hello, World! Local variable';
    console.log(string); // Show local variable

    console.log(number.toString()); // Show global variable

    console.log(text);
}

let number = 77;
let text = 'Hello, World! Goblal variable';

// console.log(string); // Can't show local variable

greeting(text);