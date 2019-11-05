'use strict';

/** Replace strings */

let string = 'Welcome to JavaScript!';

let replace = string.replace('JavaScript' , 'ReactJS'); // Replace JavaScript to ReactJS
console.log(replace);

let slice = string.slice(11, 17); // Extract a section of a string
console.log(slice);

let split = string.split(' '); // Split a string - Divide a string to array of substrings
console.log(split);
 
let trim = string.trim(); // Remove all whitespace at the start and end
console.log(trim);