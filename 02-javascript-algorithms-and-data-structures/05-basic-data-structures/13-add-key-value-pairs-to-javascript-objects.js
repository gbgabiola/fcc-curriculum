/*
  Challenge: Using the same syntax, we can also add new key-value pairs to objects. We've created a foods object with three entries.
  Add three more entries: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Dot Notation
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

// Bracket Notation
// foods['bananas'] = 13;
// foods['grapes'] = 35;
// foods['strawberries'] = 27;

console.log(foods);