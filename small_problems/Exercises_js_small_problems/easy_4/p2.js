// function input: 2 arrays
// funtion output: 1 array with combined values
// Assumptions: can use the === operator to check for equality
// Algorithm:
//   iterate through the ARGUMENTS ARRAY
//   iterate through each array in the arguments array
//   if the output doesn't contain the value, add it to the output
// return the new array
function union() {
  let combinedValues = [];
  let args = Array.prototype.slice.call(arguments);

  for (let arr of args) {
    for (let idx = 0; idx < arr.length; idx += 1) {
      if (!combinedValues.includes(arr[idx])) {
        combinedValues.push(arr[idx]);
      }
    }
  }

  return combinedValues;
}

console.log(union([1, 3, 5], [3, 6, 9]));
