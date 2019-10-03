/**
 * Challenge: Arguments Optional
 *
 * Create a function that sums two arguments together.
 * If only one argument is provided, then return a function that expects one argument and returns the sum.
 *
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 *
 * Calling this returned function with a single argument will then return the sum:
 *
 * var sumTwoAnd = addTogether(2);
 *
 * sumTwoAnd(3) returns 5.
 *
 * If either argument isn't a valid number, return undefined.
 **/

/**
 * Using typeof, arguments, ternary & arrow
 **/
function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  const checkNum = num => (typeof num !== 'number' ? undefined : num);

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    const a = checkNum(arguments[0]);
    const b = checkNum(arguments[1]);
    return a === undefined || b === undefined ? undefined : a + b;
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    const c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        return c === undefined || checkNum(arg2) === undefined ? undefined : c + arg2;
      };
    }
  }
}

/**
 * Intermediate: Using for, arguments, typeof & ternary
 **/
function addTogether() {
  const args = new Array(arguments.length);
  // Storing the arguments in an array
  for (let i = 0; i < args.length; ++i) {
    args[i] = arguments[i];
  }
  // Check for the arguments length
  if (args.length === 2) {
    // If there are two arguments,check for the type of both arguments
    // Use typeof to check the type of the argument(both should be numbers)
    return typeof args[0] !== 'number' || typeof args[1] !== 'number' ? undefined : args[0] + args[1];
  }
  // When only one argument is provided
  if (args.length === 1) {
    const a = args[0];
    // Check the argument using typeof
    if (typeof a !== 'number') {
      return undefined;
    } else {
      //Making use of closures
      return function(b) {
        //Checking the second argument
        return typeof b !== 'number' ? undefined : a + b;
      };
    }
  }
}

/**
 * Advanced: Using arguments, Array.from, some, typeof, reduce, arrow function, and ternary operator
 **/
function addTogether() {
  const args = Array.from(arguments);
  return args.some(num => typeof num !== 'number') ? undefined
    : args.length > 1 ? args.reduce((acc, num) => (acc += num), 0)
    : num => (typeof num === 'number' ? num + args[0] : undefined);
}

addTogether(2, 3); // 5
