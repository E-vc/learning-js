/** Whole-script strict mode syntax */
'use strict';

/** Variable */
/** It is an information container */

var country = 'Colombia';
var continent = 'South America';
var antiquity = new Date().getFullYear();

var concatenation = country + ', ' + continent + '. ' + antiquity;

console.log(country, continent, antiquity);
alert(concatenation);