// input: two arrays with same number of elements
// output: one array where even indexes from left odd indexes from right
// algorithm:
//   iterate until the length of either array
//   add arr[idx] to output array
//   add arr2[idx] to output array
// return output array
const interleave = function(left, right) {
  let output = [];
  for (let idx = 0; idx < left.length; idx += 1) {
    output.push(left[idx], right[idx]);
    //output.push(right[idx]);
  }
  
  return output;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
