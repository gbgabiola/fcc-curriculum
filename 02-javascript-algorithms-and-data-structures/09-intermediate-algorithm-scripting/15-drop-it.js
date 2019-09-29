/**
 * Challenge: Drop it
 *
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
 *
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 **/

/**
 * Using for loop amd shift
 **/
function dropElements(arr, func) {
  // drop them elements.
  const times = arr.length;
  for (let i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

/**
 * Intermediate: Using slice, findIndex, and ternary
 **/
function dropElements(arr, func) {
  return arr.slice(
    arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length,
    arr.length
  );
}

/**
 * Advanced: Using while loop and shift
 **/
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) { return n < 3; }); // [1, 2, 3]
