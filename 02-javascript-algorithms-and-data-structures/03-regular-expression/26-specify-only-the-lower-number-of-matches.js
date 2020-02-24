/**
 * Challenge: Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
 */

let haStr = 'Hazzzzah';
let haRegex = /Haz{4,}ah/; // /haz{4,}ah/i
let result = haRegex.test(haStr); // true
