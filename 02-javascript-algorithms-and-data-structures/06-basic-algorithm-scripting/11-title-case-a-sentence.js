/**
 * Challenge: Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 *
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */

// Solution 1: Using for loop
function titleCase(str) {
  // Step 1: Create a new string, lowercase the string
  // Step 2: Split the string into an array of strings
  let newStr = str.toLowerCase().split(' ');

  // Step 3: Create a for loop
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
  }

  // Step 4: Return the string by joining them from array into a string
  return newStr.join(' ');
}

// Solution 2: Using ES6 map() method
function titleCase(str) {
  return str
    .toLowerCase() // Step 1. Lowercase the string
    .split(' ') // Step 2: Split the string into an array of strings
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Step 3: Map over the array
    .join(' '); // Step 4: Return the new string by joining them from array into a string
}

// Solution 3: Using ES6 map() and replace() method
function titleCase(str) {
  return str
    .toLowerCase() // Step 1. Lowercase the string
    .split(' ') // Step 2: Split the string into an array of strings
    .map(word => word.replace(word[0], word[0].toUpperCase())) // Step 3: Map over the array
    .join(' '); // Step 4: Return the string by joining them from array into a string
}

// Solution 4: Using ES6 map() method
function titleCase(str) {
  return str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substr(1)).join(' ');
}

// Solution 5: Using ES6 map() method and RegEx
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (str) => str.toUpperCase());
}

// Test:
titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
