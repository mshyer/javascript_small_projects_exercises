'use strict';

function isDouble(num) {
  if ((num).toString(10).length % 2 !== 0) {
    return false;
  }

  let template = `(.{${(num).toString(10).length / 2}})\\1`;
  let regx = new RegExp(template);
  return regx.test(num);
}

const twice = function(num) {
  return isDouble(num) ? num : num * 2;
};


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
