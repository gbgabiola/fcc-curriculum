/**
 * Challenge: Check if a value is classified as a boolean primitive.
 * Return true or false.
 *
 * Boolean primitives are true and false.
 */

// Solution 1: Using ternary operator
function booWho(bool) {
  // Adding ternary operator is optional because it will always evaluate the condition first to true then false
  return bool === true || bool === false; // ? true : false are optional
}

// Solution 2: Using typeof operator
function booWho(bool) {
  // Check the typeof bool if it's equal true, return true, else return false
  return typeof bool === 'boolean';
}

booWho(null); // false
