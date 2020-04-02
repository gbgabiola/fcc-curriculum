/**
 * Challenge: Seek and Destroy
 *
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 *
 * Note: You have to use the arguments object.
 */

// Solution 1: Using Boolean, arguments, slice() and filter() method
function destroyer(arr) {
  const args = Array.prototype.slice.call(arguments);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean)
}

// Solution 2: Using arguments, slice(), filter() and includes() methods
function destroyer(arr) {
  const args = Array.prototype.slice.call(arguments);
  return arr.filter(num => !args.includes(num));
}

// Solution 3: Using spread operator, filter() and includes() method
const destroyer = (arr, ...args) => arr.filter(num => !args.includes(num));

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
