'use strict';

/** Numbers odd between two numbers */

let numberOne = Number(prompt('Enter number one', 0));
let numberTwo = Number(prompt('Enter number two', 0));

while (numberOne < numberTwo) {
    numberOne += 1;
    
    if (numberOne % 2 !== 0) {
        console.log(`The ${numberOne} is odd.`);
    }
}