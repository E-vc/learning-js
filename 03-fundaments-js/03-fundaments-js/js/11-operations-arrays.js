'use strict';

/** Convert the string to an array */

let people = 'Rose, Dwayne, Keanu, Saori, Jennifer';
let array = people.split(', ');


/** Order the array - Reverse the array */

array.sort();
console.log(array);

array.reverse();
console.log(array);

/** Search in the array  */

let found = array.find((person) => person === 'Keanu');
console.log(found);

let foundIndex = array.findIndex((person) => person === 'Keanu');
console.log(foundIndex);

/** Numerical values */

let prices = [2255, 2750, 5450];

let some = prices.some(price => price > 2300); // (true or false)
console.log(some);