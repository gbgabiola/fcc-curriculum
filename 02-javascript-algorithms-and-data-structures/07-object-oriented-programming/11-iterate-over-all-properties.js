/*
  Challenge: Add all of the own properties of beagle to the array ownProps.
  Add all of the prototype properties of Dog to the array prototypeProps.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }

  // One line: Using ternary
  beagle.hasOwnProperty(property) ? ownProps.push(property) : prototypeProps.push(property);
}