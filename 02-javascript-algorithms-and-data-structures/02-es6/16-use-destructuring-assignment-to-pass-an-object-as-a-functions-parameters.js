const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict";
  
  // return function half({max, min}) {
  //   return (max + min) / 2.0;
  // };

  // Using anonymous function
  return (({max, min}) => {
    return (max + min) / 2.0;
  });
})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

