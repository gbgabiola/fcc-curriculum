/*
  Challenge: Change the regex countWhiteSpace to look for multiple non-whitespace characters in a string.
*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);