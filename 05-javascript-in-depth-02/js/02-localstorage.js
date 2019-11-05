'use strict';

/** LocalStorage */

/** Browser compatibility */
const storage = typeof Storage !== 'undefined' ? 'LocalStorage available' : 'LocalStorage unavailable';
console.log(storage);

/** Save and Load data in LocalStorage */
localStorage.setItem('title', 'Joker');

let value = localStorage.getItem('title');
document.querySelector('#span').innerHTML = value;

/** Save and Load object in LocalStorage */
let user = { name: 'Marian', email: 'marian@gmail.com' };
localStorage.setItem('user', JSON.stringify(user));

let data = localStorage.getItem('user');
document.write(data);
console.log(JSON.parse(data));

/** Remove item of LocalStorage */
localStorage.removeItem('user');

/** Clear LocalStorage */
localStorage.clear();