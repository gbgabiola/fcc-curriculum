/*
  Challenge: Use the every method inside the checkPositive function to check if every element in arr is positive.
  The function should return a Boolean value.
*/

function checkPositive(arr) {
  // return arr.every(function(item) {
  //   return item > 0;
  // });

  return arr.every(item => item > 0); // Using arrow
}
checkPositive([1, 2, 3, -4, 5]); // false