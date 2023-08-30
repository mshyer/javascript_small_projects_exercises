function sortDescending(arr) {
  let copy = arr.slice();
  return copy.sort((n1, n2) => n2 - n1);
}
let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array); 
