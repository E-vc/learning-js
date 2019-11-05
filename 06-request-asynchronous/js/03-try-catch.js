'use strict';
/**
 * The try...catch statement marks a block of statements to try,
 * and specifies a response, should an exception be thrown.
*/

try {
  const year = new Date().getFullYear();
  console.log(encodeURIComponent('https://sailsjs.com/'));
  alert(year);
  console.log(decodeURIComponent('https://?%&octopus.com/'));
} catch (err) {
  console.log(err);
  alert('An error has occurred, current year cannot be displayed.');
}
