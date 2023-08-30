// Problem: multiply the index values of each array together and add to new array
// Input: two array arguments
// Output: one array
// Algorithm:
//   For the length of the array, for each array in argument add the value at that index to an array in the output array
//   Then map the output array with the products for each sub array
function multiplyList(...arrays) {
  let products = [];
  for (let idx1 = 0; idx1 < arrays[0].length; idx1 += 1) {
    let indexArray = [];
    indexArray = [];
    for (let idx2 = 0; idx2 < arrays.length; idx2 += 1) {
      indexArray.push(arrays[idx2][idx1]);
    }
    products.push(indexArray);
  }

  return (products.map(array => array.reduce((acc, ele) => acc * ele)));
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
