/*
  Challenge: Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
*/

function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }

  // Can use ternary but can be omitted: return true, otherwise false
  // return candidate.constructor === Dog;
}




function joinDogFraternity(candidate) {
  // if (candidate.constructor === Dog) {
  //   return true;
  // } else {
  //   return false;
  // }
  return candidate.constructor === Dog ? true : false;
}