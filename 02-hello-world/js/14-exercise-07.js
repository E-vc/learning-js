'use strict';

/** Multiplication table */

let number = Number(prompt('What number do you want the multiplication table', 0));

document.write(`<h2>Multiplication table of ${number}</h2>`);

for (let i = 1; i <= 10; i += 1) {
    document.write(`<span>${number} * ${i} = ${number * i}</span><hr/>`);
}

document.write(`<center><h2>All multiplication table</h2></center>`);

for (let i = 1; i <= 10; i += 1) {
    document.write(`<h2>Multiplication table of ${i}</h2><hr/>`);
    for (let j = 1; j <= 10; j += 1) {
        document.write(`<span>${i} * ${j} = ${i * j}</span><br/>`);
    }
}