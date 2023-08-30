function stringy(num) {
  let bits = '';
  for (let idx = 0; idx < num; idx += 1) {
    bits += (idx % 2 === 0 ? 1 : 0);
  }
  return bits;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
