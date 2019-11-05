'use strict';

/** Loop for (Structure of control) */

let number = 100;

for (let index = 1; index <= number; index++) {
    console.log(index);
    // debugger;
}

/** Loop while (Structure of control) */

let year = new Date().getFullYear();

while (year <= 2049) {
    year += 1;
    console.log(`Year: ${year}`);
}

/** Loop do while (Structure of control) */

let mounth = new Date().getMonth();

do {
    alert(`It is ${true}.`);
} while (mounth !== 8);

/** Loop break - Stop */

let day = new Date().getDate();

while (day !== 30) {
    day += 1;
    console.log(`Day: ${day}`);
    if (day === 25) {
        break;
    }
}