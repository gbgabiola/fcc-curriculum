const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

(function() {
  "use strict";
  arr2 = [...arr1];
})();
console.log(arr2);