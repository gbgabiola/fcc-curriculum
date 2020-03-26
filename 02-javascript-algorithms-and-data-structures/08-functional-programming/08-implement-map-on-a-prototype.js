/**
 * Challenge: Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
 * You may use a for loop or the forEach method.
 */

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];

  // Solution 1: Using for loop
  // for (let i = 0; i < this.length; i++) {
  //   newArray.push(callback(this[i]));
  // }

  // Solution 2: Using forEach()
  this.forEach(item => newArray.push(callback(item)));

  return newArray;
};

const new_s = s.myMap(function(item){
  return item * 2;
});

new_s; // [46, 130, 196, 10]
