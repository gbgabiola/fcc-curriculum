const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // const resultDisplayArray = [`<li class="text-warning">${result.failure[0]}</li>`,
  // `<li class="text-warning">${result.failure[1]}</li>`,
  // `<li class="text-warning">${result.failure[2]}</li>`];

  // Using map
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