/**
 * Challenge: Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.
 */

// The global variable
var fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

var newValue = incrementer(); // 5
fixedValue; // 4
