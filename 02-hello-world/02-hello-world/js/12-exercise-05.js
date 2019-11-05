'use strict';

/** Divisors of a number */

let number = parseInt(prompt('Enter a number', 1));

for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
        console.log('Divisor', i);
    }
}