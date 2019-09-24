/**
 * Challenge: Sorted Union
 *
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 *
 * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 *
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 *
 * Check the assertion tests for examples.
 **/

function uniteUnique(arr) {
  /**
   * Using for loops, arguments, indexOf & push
   **/
  const finalArray = []; // Creates an empty array to store final result
  // Loop through the arguments object to truly made the program work with two or more arrays instead of 3
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];
    // Loop through the array at hand
    for (let j = 0; j < arrayArguments.length; j++) {
      const indexValue = arrayArguments[j];
      // Checks if value is already on the final array
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;

  /**
   * Using for loops, arguments, push, includes & spread
   **/
  const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;

  /**
   * Intermediate: Using filter, reduce, concat, slice & indexOf
   **/
  let newArr;
  const args = Array.prototype.slice.call(arguments); // Convert the arguments object into an array
  // Use reduce function to flatten the array
  newArr = args.reduce(function(arrA, arrB) {
    // Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(item) {
      return arrA.indexOf(item) === -1;
    }));
  });
  return newArr;

  /**
   * Advanced: Using while loop, arguments, concat, filter & indexOf
   **/
  let concatArr = [];
  let i = 0;
  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]);
    i++;
  }
  const uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

/**
 * Advanced: Using concat, ES6 set & spread
 **/
function uniteUnique(...arrays) {
  const flatArray = [].concat(...arrays); // Make an array out of the given arrays and flatten it (using the spread operator)
  return [...new Set(flatArray)]; // Create a Set which clears any duplicates since it's a regulat set and not a multiset
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
