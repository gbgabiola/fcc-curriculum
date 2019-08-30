/*
  Challenge: Check if a value is classified as a boolean primitive. Return true or false.
  Boolean primitives are true and false.
*/

function booWho(bool) {
  // Adding ternary operator is optional because it will always evaluate the first to true then false
  return (bool === true || bool === false); // ? true : false optional
  
  // return typeof bool === 'boolean'; // Using typeof

}

booWho(null); // false