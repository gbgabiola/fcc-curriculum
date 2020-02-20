/**
 * Challenge: Use object property shorthand with object literals to create and return an object with name, age and gender properties.
 */

const createPerson = (name, age, gender) => {
  'use strict';
  return { name, age, gender };
};

console.log(createPerson('Zodiac Hasbro', 56, 'male')); // { name: 'Zodiac Hasbro', age: 56, gender: 'male' }
