'use strict';

/** Exercises with arrays */

let numbers = [];
let number;

for (let i = 0; i < 6; i += 1) {
    number = Number(prompt('Enter a number:', 0));
    numbers.push(number);
}

function showNumbers(numbers, show = false) {
    if (show) {
        document.write('<ul>');
        for (let number of numbers) {
            document.write(`<li>${number}</li>`);
        }
        document.write('</ul>');
    } else {
        for (let number in numbers) {
            console.log(numbers[number]);
        }
    }
}

showNumbers(numbers, true);

numbers.sort();
document.write('<ul>');
numbers.forEach(function (number, index) {
    document.write(`<li>${index}. Number: ${number}</li>`);
});
document.write('</ul>');

numbers.reverse();
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

console.log('Length:', numbers.length);

let search = parseInt(prompt('What number do you want to search?'));

let index = numbers.indexOf(search);
let value = numbers.find(number => number === search);

if (value) {
    console.log(`Number found ${value} in the index ${index}`);
} else {
    console.log('Number not found');
}

/** ---------------------------------------------------------------- */

function showArray(values, message = '') {
    /** Show array numbers in body */
    document.write(`<h1>Numbers ${message}</h1>`);
    document.write('<ul>');
        values.forEach((value, index) => {
            document.write(`<li>${value}</li>`)
        });
    document.write('</ul>');
}

let values = new Array(6);

/** Request the numbers */
for (let index = 0; index <= 5; index += 1) {
    values[index] = Number(prompt('Enter a number', 0));
    // values.push(parseInt(prompt('Enter a number', 0)));
}

/** Show array numbers in console.log */
console.log(values);

/** Show array numbers in body */
showArray(values);

/** Order and show the numbers */
values.sort((a, b) => a - b); // By ascending order
showArray(values, '- Order');

/** Reverse array and show the numbers */
values.reverse();
showArray(values, '- Reverse');

/** Array length */
document.write(`<h2>Length: ${values.length}</h2>`);

/** Search number */
let found = parseInt(prompt('Search a number', 0));

let position = values.findIndex(number => number === found);

if (position && position !== -1) {
    document.write(`<h3>Found number ${position}</h3>`);
} else {
    document.write(`<h3>Not found number ${found}</h3>`);
}

