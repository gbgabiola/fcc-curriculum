/*
  Challenge: Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
*/

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i;
let result = haRegex.test(haStr);