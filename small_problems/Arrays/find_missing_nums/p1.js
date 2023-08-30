function missing(arr) {
  // set index to minimum
  // iterate
  // if the iterator is not in the original array, add the iterator to output array
  let missingNo = [];
  for (let idx = arr[0]; idx <= arr.slice(-1); idx += 1) {
    if (arr.indexOf(idx) === -1) {
      missingNo.push(idx);
    }
  }
  return missingNo;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
