'use strict';

/** Conditional if (Structure of control) */

let age1 = 18;
let age2 = 19;

if (age1 > age2) {
    console.log(`${age1} is higher to ${age2}`);
} else {
    console.log(`${age1} is lower to ${age2}`);
}

/** Exercise with conditional */
let age = 19;
let name = 'Yue';

if (age >= 18) { /** ===, <, <=, >, >=, !== */
    console.log(`${name} is ${age} years old. She is older of age.`);
} else {
    console.log(`${name} is ${age} years old. She is younger of age.`);
}

let year = new Date().getFullYear();

if (year >= 2000 && year <= 2020) { /** &&, ||, ! */
    console.log('Now');
} else {
    console.log('Later');
}

/** Conditional switch (Structure of control) */

let string = '';

switch (age) {
    case 19:
        string = 'She is older of age.';
        break;

    default:
        string = 'She is younger of age.';
        break;
}

console.log(string);