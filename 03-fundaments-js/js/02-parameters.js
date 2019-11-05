'use strict';

/** Parameters (Rest and Spread) */

function fruitList(fruitOne, fruitTwo, ...othersFruit) {
    console.log(`1. ${fruitOne}`);
    console.log(`2. ${fruitTwo}`);
    for (let i = 0; i < othersFruit.length; i += 1) {
        console.log(`${i} ${othersFruit[i]}`);
    }
}

let fruits = ['Grape', 'kiwi', 'Lemon'];
fruitList(...fruits, 'Apple', 'Pineapple', 'Banana', 'Strawberry', 'Cherry');