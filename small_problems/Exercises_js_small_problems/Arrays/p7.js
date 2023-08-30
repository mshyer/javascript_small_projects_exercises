const shift = function(array) {
  //move all of the array elements left one
  //  iterate... the item at index equals item at index plus one
  //then reduce length by one
  let first = array[0];
  for (let idx = 0; idx < array.length; idx += 1) {
    array[idx] = array[idx + 1];
  }
  array.length = Math.max(array.length - 1, 0);
  return first;
}

const unshift = function(arr, value) {
  //first increase length by one
  //in decreasing order!
  //shift all values to the right by one
  //set first array value to value
  //return new length
  arr.length += 1;
  for (let idx = arr.length - 1; idx > 0; idx--) {
    [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
  }
  arr[0] = value;
  return arr.length;
    
}

let arr = [1, 2, 3, 4];

//console.log(shift(arr));
//console.log(arr);
//
//console.log(shift([]));

console.log(unshift(arr, 'ham sandwich'));
console.log(arr);

let blank = [];
console.log(unshift(blank, 'tuna sandwich'));
console.log(blank);
