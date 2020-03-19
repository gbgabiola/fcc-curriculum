/**
 * Challenge: Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
 */

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  // if (candidate.constructor === Dog) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Using ternarty operator and ommited return values
  return candidate.constructor === Dog;
}
