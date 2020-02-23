/**
 * Challenge: Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.
 */

let rickyAndCal = 'Cal and Ricky both like racing.';
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal); // true
