/*
  Challenge: Return an array consisting of the largest number from each provided sub-array.
  For simplicity, the provided array will contain exactly 4 sub-arrays.
  Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    results[i] = largest;
  }

  // Solution 2: Using forEach, Math.max.appy & arrow function
  // arr.forEach((a) => {
  //   results.push(Math.max.apply(null, a));
  // });
  return results;

  // Intermediate Solution: Using map, reduce & ternary
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });


  // Advanced Solution : Using map, Function.appy, Function.bind & Math.max
  // return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Other solutions
// function largestOfFour(arr) {
//   const arg = []; // to put the numbers in
//   const len = arr.length; // how many miniarrays there are
//   for(let i = 0; i < len; i++) { // loops the number of miniarrays
//     let lar = 0; // to store the biggest int of four
//     lar = arr[0]; // lar = firstnum of miniarray
//     lar = Math.max(...arr[i]); // to find the highest value of the four
//     arg.push(lar); // pushes biggest num on arg
//   }
//   return arg; // returns arg
// }