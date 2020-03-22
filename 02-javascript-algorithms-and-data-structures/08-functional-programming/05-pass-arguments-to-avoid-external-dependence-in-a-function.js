/**
 * Challenge: Let's update the incrementer function to clearly declare its dependencies.
 *
 * Write the incrementer function so it takes an argument, and then increases the value by one.
 */

// The global variable
var fixedValue = 4;

function incrementer(value) {
  return value + 1;
}

var newValue = incrementer(fixedValue); // 5
console.log(fixedValue); // 4
