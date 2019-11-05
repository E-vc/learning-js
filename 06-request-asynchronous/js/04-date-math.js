'use strict';
/** Date Object Methods */
let date = new Date();
let year = date.getFullYear();
let mounth = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let date_string = `The year is ${year}. The mounth is ${mounth}. The day is ${day}.
The hour is ${hour}:${minutes}:${seconds}.
The complete date is ${date}`;

console.log(date_string);

/** Math Object Methods */

/** random number */
let random = Math.random();
console.log(random);

/** rounded up to its nearest integer */
let ceil = Math.ceil(random);
console.log(ceil);