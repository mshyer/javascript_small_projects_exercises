// Problem: multiply all elements together and divide by length. Then round to three decimals
// Input: array of numbers
// Output: one value
// Algorithm: use reduce
//   accumulator equals previous value times next value
//   Then divide the reduced multiplicative average by the array length
// Then use Number.toFixed(3)
// return string
function showMultiplicativeAverage(numArr) {
  let product = numArr.reduce((acc, element) => acc * element);
  let multAverage = product / numArr.length;

  return multAverage.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
