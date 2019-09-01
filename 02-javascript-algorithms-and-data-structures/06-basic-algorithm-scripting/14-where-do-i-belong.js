/*
  Challenge: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
  The returned value should be a number.

  For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
  
  Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  
  // Using a for loop
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;

  // Using a while loop
  // let i = 0;
  // while (num > arr[i]) {
  //   i++;
  // }
  // return i;



  // Solution 2: Using a normal for loop & counter
  // let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   // counts how many array numbers are smaller than num
  //   if (num > arr[i]) count++;
  // }
  // return count;


  // Using push, sort, indexOf & arrow
  arr.push(num);
  arr.sort((a, b) => a - b);
  return arr.indexOf(num);


  // Using concat, sort, indexOf & arrow
  // return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([40, 60], 50); // 1