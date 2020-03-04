/**
 * Challenge: Check if a string (first argument, str) ends with the given target string (second argument, target).
 *
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 * But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 */

function confirmEnding(str, target) {
  // return str.endsWith(target); // Using the built-in method
  return str.slice(str.length - target.length) === target;

  // Solution 2: Using substr, can also remove the str.length
  // return str.substr(str.length - target.length) === target;
}

confirmEnding('Bastian', 'n'); // true
