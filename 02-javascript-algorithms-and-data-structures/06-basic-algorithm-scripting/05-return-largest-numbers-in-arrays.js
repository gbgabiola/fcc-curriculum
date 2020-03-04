/**
 * Challenge: Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 *
 * Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 */

 /**
// Solution 1
function largestOfFour(arr) {
  const results = [];

  arr.forEach((a) => {
    results.push(Math.max.apply(null, a));
  });
  return results;
}
*/

/**
// Solution 2
function largestOfFour(arr) {
  // Step 1: Map over the arrays
  return arr.map(subArray => { // Step 3: Return the largest numbers of each sub-arrays

    // Step 2. Return the largest numbers for each sub-arrays with Math.max() method, use null instead of 'this' keyword
    return Math.max.apply(null, subArray);
  });
}
*/


// Solution 3
function largestOfFour(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

/**
// Solution 4
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
*/

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [5, 27, 39, 1001]

