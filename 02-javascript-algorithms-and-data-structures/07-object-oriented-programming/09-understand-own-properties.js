/**
 * Challenge: Add the own properties of canary to the array ownProps.
 */

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];

for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

ownProps; // ['name', 'numLegs']
