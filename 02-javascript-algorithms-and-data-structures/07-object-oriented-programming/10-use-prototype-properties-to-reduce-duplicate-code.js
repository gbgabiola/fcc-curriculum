/**
 * Challenge: Add the own properties of canary to the array ownProps.
 */

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
let beagle = new Dog('Snoopy');

beagle.numLegs; // 4
