/**
 * Challenge: Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
 */

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat() {
    console.log('nom nom nom');
  },
  describe() {
    console.log(`My name is ${this.name} and I have ${this.numLegs} legs.`)
  }
};
