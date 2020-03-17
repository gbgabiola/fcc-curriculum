/**
 * Challenge: Modify the dog.sayLegs method to remove any references to dog.
 * Use the duck example for guidance.
 */

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + this.numLegs + " legs.";
  }
};

dog.sayLegs(); // This dog has 4 legs.
