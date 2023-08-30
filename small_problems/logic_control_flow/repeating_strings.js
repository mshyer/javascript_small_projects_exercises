const isCount = value => Number.isInteger(value) && value >= 0;
function repeat(string, times) {
  if (!isCount(times)) {
    return undefined;
  }

  let output = '';
  while (times > 0) {
    output += string;
    times -= 1;
  }
  return output;
}
let str = 'abc';
console.log(repeat(str, 'buddy') === undefined);
console.log(repeat(str, 0) === '');
console.log(repeat(str, 2) === 'abcabc');
