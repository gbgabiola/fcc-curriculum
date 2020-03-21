/**
 * Challenge: Create a mixin named glideMixin that defines a method named glide.
 * Then use the glideMixin to give both bird and boat the ability to glide.
 */

let bird = {
  name: 'Donald',
  numLegs: 2
};

let boat = {
  name: 'Warrior',
  type: 'race-boat'
};

let glideMixin = function(obj) {
  obj.glide = function() {
    return 'Gliding!';
  }
};

glideMixin(bird);
glideMixin(boat);

bird.glide(); // Gliding!
boat.glide(); // Gliding!
