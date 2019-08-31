/*
  Challenge: Return the provided string with the first letter of each word capitalized.
  Make sure the rest of the word is in lower case.
  
  For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(' ');

  // Using ES6: toLowerCase, split, map, charAt, toUpperCase, slice or substr, join and arrow
  // return str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substr(1)).join(' ');


  // Using ES6 & RegExp: toLowerCase, replace, toUpperCasde and arrow
  // return str.toLowerCase().replace(/(^|\s)\S/g, (str) => str.toUpperCase());
}

console.log(titleCase("I'm a little tea pot")); // "I'm A Little Tea Pot"