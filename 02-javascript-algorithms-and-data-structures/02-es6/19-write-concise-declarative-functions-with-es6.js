/**
 * Challenge: Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
 */

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear); // 3
