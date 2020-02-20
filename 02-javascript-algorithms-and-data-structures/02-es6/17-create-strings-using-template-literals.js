/**
 * Challenge: Use template literal syntax with backticks to display each entry of the result object's failure array.
 * Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.
 *
 * Use an iterator method (any kind of loop) to get the desired output.
 */

const result = {
  success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
  failure: ['no-var', 'var-on-top', 'linebreak'],
  skipped: ['id-blacklist', 'no-dup-keys']
};
function makeList(arr) {
  'use strict';
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
