'use strict';

/** let - var (The difference in scope and functionality) */

/** var */
var number = 32;
console.log(number); // Value 32

if (true) {
    var number = 48;
    console.log(number); // Value 48
}

console.log(number); // Value 48

/** let */
let text = 'Course JS';
console.log(text); // Value 'Course JS'

if (true) {
    let text = 'Course Python';
    console.log(text); // Value 'Course Python'
}

console.log(text); // Value 'Course JS'

/** const (Value immutable) */
const ip = '192.168.1.131';

console.log(ip);