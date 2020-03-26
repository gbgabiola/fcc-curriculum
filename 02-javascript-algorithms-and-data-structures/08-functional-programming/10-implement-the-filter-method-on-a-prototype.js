/**
 * Challenge: Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
 * You may use a for loop or the Array.prototype.forEach() method.
 */

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {

  const newArray = [];
  // Solution 1: Using for loop
  // for (let i = 0; i < this.length; i++) {
  //   if (callback(this[i])) newArray.push(this[i]);
  // }

  // Solution 2: Using forEach()
  this.forEach(item => {
    if (callback(item)) newArray.push(item)
  });

  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

new_s; // [23, 65, 5]
