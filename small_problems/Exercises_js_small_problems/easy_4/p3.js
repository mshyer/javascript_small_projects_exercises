//Problem: take one array, and split it in half, returning a single array with two sub arrays
//   if the array has odd length, the first half gets the middle element
//   if there is one or zero elements, the result array will still have two sub arrays.
// algorithm:
//   initialize the output array with two sub arrays
//   calculate the halfpoint as Math.ceil(array length / 2)
//   iterate through the input array until the HALFPOINT
//     add each item to the first sub array
//   iterate through the input array from the HALFPOPINT not inclusive to the end
//     add each item to the second sub array
//
function halvsies(array) {
  let halves = [[], []];
  const MIDDLE = Math.ceil(array.length / 2);
  //for (let idx = 0; idx < MIDDLE; idx++) {
  //  halves[0].push(array[idx]);
  //}

  //for (let idx = MIDDLE; idx < array.length; idx += 1) {
  //  halves[1].push(array[idx]);
  //}
  //
  //return halves;
  const firstHalf = array.slice(0, MIDDLE);
  const secondHalf = array.slice(MIDDLE);
  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
