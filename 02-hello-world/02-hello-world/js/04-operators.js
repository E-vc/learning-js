'use strict';

/** Operators and type of data */

/** Operators */
let number1 = 7;
let number2 = 2;
let add = number1 + number2; /** -, /, *, % */

alert('Sum result: ' + add);

/** Type of data */
let number_int = 77;
let text_string = 'Hi. How are you?';
let boolean = true;

console.log(number_int, text_string, boolean);

/** Type of data - Functions */
console.log('int or float', Number('3')); /** int, float */
console.log('int', parseInt('8')); /** int */
console.log('float', parseFloat('2')); /** float */
console.log('string', String(11) + 3); /** string */

/** Operator typeof */
console.log('typeof', typeof number_int);
console.log('typeof', typeof text_string);
console.log('typeof', typeof boolean);