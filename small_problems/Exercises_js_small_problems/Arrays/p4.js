const concat = function(arr, ...args) {
  let result = [...arr];
  for (let arg of args) {
    if (Array.isArray(arg)) {
      for (let element of arg) {
        result.push(element);
      }
    } else {
      result.push(arg);
    }
  }
  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], 'a', ['one', 'two']));
console.log(concat([1, 2], ['three'], 4));
