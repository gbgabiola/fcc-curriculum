/*
  Challenge: We've defined a function, sumOfTen, which takes an array as an argument and returns the sum of that array's elements. 
  Modify the function, using splice(), so that it returns a value of 10.
*/

function sumOfTen(arr) {
  arr.splice(1, 2);
  // arr.splice(2, 2)
  return arr.reduce((a, b) => a + b);
}

console.log(sumOfTen([2, 5, 1, 5, 2, 1])); // 10