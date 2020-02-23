/**
 * Challenge: Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
 */

let quoteSample = 'The five boxing wizards jump quickly.';
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length; // 31
