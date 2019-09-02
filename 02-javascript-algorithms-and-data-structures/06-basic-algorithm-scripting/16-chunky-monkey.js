/*
  Challenge: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  const newArr = [];

  // Using push & slice
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }

  // Using while & slice
  // let i = 0;
  // while (i < arr.length) {
  //   newArr.push(arr.slice(i, i + size));
  //   i += size;
  // }

  // Using while & slice
  // while (arr.length) {
  //   newArr.push(arr.splice(0, size));
  // }

  return newArr;

  // Using slice, concat, & recursion
  // return (arr.length <= size) ? [arr] : [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));


  // Another solution
  // let temp = [];
  // const result = [];

  // for (let a = 0; a < arr.length; a++) {
  //   if (a % size !== size - 1)
  //     temp.push(arr[a]);
  //   else {
  //     temp.push(arr[a]);
  //     result.push(temp);
  //     temp = [];
  //   }
  // }

  // if (temp.length !== 0) {
  //   result.push(temp);
  // }
  // return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]