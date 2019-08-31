/*
  Challenge: You are given two arrays and an index.

  Use the array methods slice and splice to copy each element of the first array into the second array, in order.

  Begin inserting elements at index n of the second array.

  Return the resulting array.
  The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  const arrCopy = arr2.slice();//  simply copying the entire array, no need to set parameters on slice
  // const arrCopy = [...arr2]; // or using function rest parameter
  // console.log(n + ' ~ '+ arr2 + ' << ' + arr1);

  // arrCopy.splice(n, 0, ...arr1);
  // console.log(arrCopy);

  for (let i = 0; i < arr1.length; i++) {
    arrCopy.splice(n, 0, arr1[i]);
    n++;
  }

  return arrCopy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); // 4,1,2,3,5,6