/**
 * Challenge: Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).
 */

let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(ob) {
      obj.sing = function() {
        console.log('Singing to an awesome tune');
      };
    }
  }
})();


let funModule = (() => {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log('Singing to an awesome tune');
    }
  }
})();
