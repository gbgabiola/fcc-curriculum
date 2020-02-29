/**
 * Challenge: We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments.
 * The function is supposed to return a new array made up of num copies of arr.
 * We have done most of the work for you, but it doesn 't work quite right yet.
 * Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
 */

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2)); // [[true, false, true], [true, false, true]]
