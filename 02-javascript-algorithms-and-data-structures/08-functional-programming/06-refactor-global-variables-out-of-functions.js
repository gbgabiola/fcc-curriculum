/**
 * Challenge: Rewrite the code so the global array bookList is not changed inside either function.
 * The add function should add the given bookName to the end of the array passed to it and return a new array (list).
 * The remove function should remove the given bookName from the array passed to it.
 *
 * Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.
 */

// The global variable
var bookList = ['The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae'];

function add(arr, bookName) {
  // const newArr = [...arr];
  // newArr.push(bookName);
  // return newArr;

  return [...arr, bookName];
}

function remove(arr, bookName) {
  // const newArr = [...arr];
  // if (newArr.indexOf(bookName) >= 0) {
  //   newArr.splice(newArr.indexOf(bookName), 1);
  //   return newArr;
  // }

  if (arr.indexOf(bookName) >= 0) {
    return arr.filter(item => item !== bookName);
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList); // [ 'The Hound of the Baskervilles', 'On The Electrodynamics of Moving Bodies', 'Philosophiæ Naturalis Principia Mathematica', 'Disquisitiones Arithmeticae']
