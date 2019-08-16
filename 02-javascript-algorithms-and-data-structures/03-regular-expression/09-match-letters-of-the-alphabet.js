/*
  Challenge: Match all the letters in the string quoteSample.
  Note: Be sure to match both upper- and lowercase letters.
*/

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);