/**
 * Challenge: We have defined a function, mixedNumbers, which we are passing an array as an argument.
 * Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
 */

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six'])); // ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9]
