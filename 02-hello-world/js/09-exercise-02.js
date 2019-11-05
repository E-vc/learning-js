'use strict';

/** Usign a loop show the sum and mean  */

let notes = [];

for (let index = 0; index < 5; index++) {
    Number(notes.push(prompt(`Enter the ${index} note:`)));  
}

let result = notes.reduce((sum, note) => Number(sum) + Number(note));

console.log(result / notes.length);

/** -------------------------------------------------------- */

let sum = 0;
let count = 0;
let number = 0;

do {
    number = parseInt(prompt(`Enter the ${count} number:`, 0));
    if (isNaN(number)) {
        number = 0;
    }
    if (number >= 0) {
        sum += number;
    }
    count += 1;
    console.log(count, sum);
} while (number >= 0);

let mean = sum / count;

alert(`Sum: ${sum} - Mean: ${mean}`);