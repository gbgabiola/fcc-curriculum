/**
 * Challenge: Seek and Destroy
 *
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 *
 * Note: You have to use the arguments object.
 **/

function destroyer(arr) {
  const args = Array.prototype.slice.call(arguments);

  /**
   * Using fiter, Boolean & arguments
   **/
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);

  /**
   * Intermediate: Using slice, includes, arguments & arrow
   */
  return arr.filter(val => !args.includes(val));
}

/**
 * Advanced: Using filter, inclides arrow, & spread operator
 **/
const destroyer = (arr, ...args) => arr.filter(val => !args.includes(val));

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
