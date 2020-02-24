/**
 * Challenge: Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
 */

let sample = 'Whitespace is important in separating words';
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace); // (5) [" ", " ", " ", " ", " "]
