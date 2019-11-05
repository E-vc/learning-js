'use strict';

/** JSON - JavaScript Object Notation */


let movie = {
    title: 'Joker',
    year: new Date().getFullYear(),
    country: 'United States',
}

document.getElementById('span').innerHTML = JSON.stringify(movie); // Convert Object to String, using JSON stringify
console.log(movie);

let movies = [
    { title: 'Spider-Man: Far from Home', year: new Date().getFullYear(), country: 'United States' },
    { title: 'The Old Man & the gun', year: new Date().getFullYear() - 1, country: 'United States' },
    { title: 'It Chapter Two', year: new Date().getFullYear(), country: 'United States' },
];

document.write('<ul>');
for (let movie of movies) {
    document.write(`<li>${JSON.stringify(movie)}</li>`);
}
document.write('</ul>');
console.log(movies);