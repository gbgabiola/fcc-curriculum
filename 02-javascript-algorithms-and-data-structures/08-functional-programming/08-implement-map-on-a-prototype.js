/**
 * Challenge: Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
 * You may use a for loop or the forEach method.
 */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // for (let i = 0; i < this.length; i++) newArray.push(callback(this[i])); // Using for loop

  this.forEach(item => newArray.push(callback(item))); // Using forEach
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

// [46, 130, 196, 10]
