/*
  Challenge: Let's update the incrementerfunction to clearly declare its dependencies.

  Write the incrementerfunction so it takes an argument, and then increases the value by one.
*/

// the global variable
var fixedValue = 4;

function incrementer(value) {
  return value + 1;
}

var newValue = incrementer(fixedValue); // 5
console.log(fixedValue); // 4
