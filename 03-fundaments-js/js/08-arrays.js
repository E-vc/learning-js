'use strict';

/** Arrays */

let name = ['Nezuko', 'Yui', 'Tanjiro', 77, true];
console.log(name[0], name[1], name[2]); // Indexes

let languages = new Array('JavaScript', 'Java', 'C#', 'C++', 'PHP', 'Pascal', 'Cobol');
console.log(languages.length); // Calculate length of array

/** Exercise */

let element = Number(prompt('Language:', 0));

if (element >= languages.length || element < 0) {
    document.write('Enter a coding languages, between 0 and ' + languages.length);
} else {
    document.write(languages[element]);
}

/** Show all languages */

document.write('<h2>Programming languages</h2>');

document.write('<ul>');
    for (let i = 0; i < languages.length; i += 1) {
        document.write(`<li>Language ${languages[i]}</li>`);
    }
document.write('</ul>')

/** For each language */

document.write('<ul>');
    languages.forEach((element, index, array) => {
        console.log(array);
        document.write(`<li>${index}. Language ${element}</li>`);
    });
document.write('</ul>');

/** For of language */

document.write('<ul>');
    for (let language of languages) {
        document.write(`<li>Language ${language}</li>`);
    }
document.write('</ul>');

/** For in language */
document.write('<ul>');
    for (let language in languages) {
        document.write(`<li>${language}. Language ${languages[language]}</li>`);
    }
document.write('</ul>');