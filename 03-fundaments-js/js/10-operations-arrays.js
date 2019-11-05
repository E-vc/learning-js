'use strict';

/** Operations with Arrays */

let series = ['Greys Anatomy', 'Arrow', 'Riverdale', 'Stranger Things'];
series.push('Rick and Morty'); // Add a new serie

let serie = '';

do {
    serie = prompt('Enter a serie name:', 'Finish');
    series.push(serie);
} while (serie !== 'Finish');

series.pop(); // Remove the last serie
series[0] = undefined; // Change value to undefined

console.log(series);

/** Remove any existing serie */

let index = series.indexOf('Rick and Morty');
if (index > -1) {
    series.splice(index, 1);
}

console.log(series);

/** Convert the array series to a string */

let string = series.join();
console.log(string);