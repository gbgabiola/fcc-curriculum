/*
  Challenge: Fill in the code for the function incrementerso it returns the value of the global variable fixedValueincreased by one.
*/

// the global variable
var fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

var newValue = incrementer(); // 5
console.log(fixedValue); // 4
