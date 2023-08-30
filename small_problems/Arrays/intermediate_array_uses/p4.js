function matrixSums(arr) {
  return arr.map(subArr => subArr.reduce((acc, ele) => acc + ele));
}
let matrices = [[2, 8, 5], [12, 48, 0], [12]];
console.log(matrixSums(matrices));
