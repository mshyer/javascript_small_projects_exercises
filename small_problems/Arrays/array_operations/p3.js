const unshift = function(array, value) {
  for (let idx = array.length; idx > 0; idx--) {
    array[idx] = array[idx - 1];
  }
  array[0] = value;
  return array.length;
}

let count = ['baba', 1, 2, 3];
unshift(count, 0);      // 4
console.log(count);
