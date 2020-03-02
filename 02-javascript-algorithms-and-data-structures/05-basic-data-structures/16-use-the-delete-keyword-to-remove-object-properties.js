/**
 * Challenge: Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
 */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Dot Dotation
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

// Bracket Notation
// delete foods['oranges'];
// delete foods['plums'];
// delete foods['strawberries'];

console.log(foods); // { apples: 25, bananas: 13, grapes: 35 }
