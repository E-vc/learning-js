'use strict';

/** Find string */

/** Search a string */

let string = 'Welcome to JavaScript!';

let indexOf = string.indexOf('JavaScript'); // Search first match
console.log('indexOf', indexOf);

let lastIndexOf = text.lastIndexOf('o'); // Search last match
console.log('lastIndexOf', lastIndexOf);

let search = string.search('JavaScript'); // Search match (index)
console.log('Search', search);

let match = string.match('JavaScript'); // Match - Array
console.log('Match', match);

let substring = string.substr(11, 10); // Substring - String cut
console.log('Substring', substring);

let charAt = string.charAt(16); // Character
console.log('CharAt', charAt);

let start = string.startsWith('Welcome'); // Search (true - false) Match if start so
console.log('StartsWith', start);

let end = string.endsWith('Script!'); // Search (true - false) Match if end so
console.log('EndsWith', end);

let include = string.includes('Javascript'); // Includes match (true - false)
console.log('Includes', include);