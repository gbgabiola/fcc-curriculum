/*
  Challenge: Refactor (rewrite) the code so the global array bookListis not changed inside either function.
  The addfunction should add the given bookNameto the end of an array.
  The removefunction should remove the given bookNamefrom an array.
  Both functions should return an array, and any new parameters should be added before the bookNameone.
*/

// the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

/* This function adds a book to the list and return the list */
function add(arr, bookName) {
  // let newArr = [...arr];
  // newArr.push(bookName);
  // return newArr;

  return [...arr, bookName];
}

/* This function removes a book from the list and return the list */
function remove(arr, bookName) {
  // let newArr = [...arr];
  // if (newArr.indexOf(bookName) >= 0) {
  //   newArr.splice(newArr.indexOf(bookName), 1);
  //   return newArr;
  // }

  if (arr.indexOf(bookName) >= 0) {
    return arr.filter(item => item !== bookName);
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList); // (4) ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
