'use strict';

/** Functions for manipulating strings */

/** Transformation strings */

let number = 3423;
console.log('Convert to string', number.toString()); // Convert to string

let string = 'Welcome to JavaScript!';
console.log(string.toUpperCase()); // Uppercase

let text = 'Good course!';
console.log(text.toLowerCase()); // Lowercase

/** Length of string */

console.log(string.length); // Calculate length

/** Concatenation */

let concat = string.concat(' ', text); // Function concat
console.log(concat);

let literal = `${string} ${text}`; // Template literal
console.log(literal);

let complete = string + ' ' + text; // Concatenation
console.log(complete);