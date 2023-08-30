function mirror(arr) {
  //return Objectt.assign([], [...arr], [...arr].reverse());
  return arr.concat([...arr].reverse());
}
let digits = [4, 8, 15, 16, 23, 42];
console.log(mirror(digits));
