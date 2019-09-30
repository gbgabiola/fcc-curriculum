/**
 * Challenge: Steamroller
 *
 * Flatten a nested array.
 * You must account for varying levels of nesting.
 **/

/**
 * Using for...in, Array.isArray, forEach & push
 **/
function steamrollArray(arr) {
  const flattenedArray = [];
  // Create function that adds an element if it is not an array
  // If it is an array, then loops through it and uses recursion on that array.
  const flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (let i in arg) {
        flatten(arg[i]);
      }
    }
  };
  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

/**
 * Intermediate: Using concat, some, Array.isArray, spread & ternary
 **/
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

/**
 * Advanced: Using toString, replace, split & map
 **/
function steamrollArray(arr) {
  return arr
    .toString()
    .replace(',,', ',') // "1,2,,3" => "1,2,3"
    .split(',') // ['1','2','3']
    .map(function(item) {
      if (item == '[object Object]') {
        return {}; // bring back empty objects
      } else if (isNaN(item)) {
        return item; // if not a number (string)
      } else {
        return parseInt(item); // if a number in a string, convert it
      }
    });
}

steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
