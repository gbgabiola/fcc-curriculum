/*
  Challenge: Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order.
  The function should return a new array, and not mutate the globalArray variable.
*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // let newArr = arr.concat();
  // return newArr.sort();

  return arr.concat().sort();
  // return [].concat(arr).sort((a, b) => a - b); // with arrow
}
nonMutatingSort(globalArray); // [2, 3, 5, 6, 9]
