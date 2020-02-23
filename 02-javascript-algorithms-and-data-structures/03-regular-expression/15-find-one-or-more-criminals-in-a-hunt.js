/**
 * Challenge: Write a greedy regex that finds one or more criminals within a group of other people.
 * A criminal is represented by the capital letter C.
 */

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals); // ['CCC', index: 12, input: 'P1P2P3P4P5P6CCCP7P8P9', groups: undefined]
