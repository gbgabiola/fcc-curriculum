/*
  Challenge: We've defined a function, checkInventory, which receives a scanned item as an argument.
  Return the current value of the scannedItem key in the foods object.
  You can assume that only valid keys will be provided as an argument to checkInventory.
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples")); // 25