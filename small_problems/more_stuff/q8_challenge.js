const nonNumTypes = [
    'string',
    'object',
    'null',
    'undefined',
    'bigint',
    'symbol'];
function isNotANumber(value) {
    return value !== value;
//   let type = typeof value;
//   if (nonNumTypes.includes(type)) {
//       return false
//   } else if (value === 0) {
//       return false
//   } else if (value) {
//       return false
//   } else {
//       return true
//   }
}

console.log(isNotANumber(null));
console.log(isNotANumber(-Infinity));
console.log(isNotANumber('3'));
console.log(isNotANumber(NaN));


