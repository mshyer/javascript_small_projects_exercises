const push = function(array, value) {
  array[array.length] = value;
  return array.length;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
push(arr, 6);
console.log(arr);
console.log(arr.length);
