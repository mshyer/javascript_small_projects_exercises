function reverse(input) {
  if (Array.isArray(input)) {
    return reverseArray(input);
  } else {
    return reverseString(input);
  }
}

const reverseArray = function(array) {
  let reversed = [];
  array.forEach(element => reversed.unshift(element));
  return reversed;
}

const reverseString = function(str) {
  let reversed = '';
  for (let idx = str.length - 1; idx >= 0; idx -= 1) {
    reversed += str[idx];
  }
  return reversed;
}

console.log(reverse([1, 2, 3, 4]));
console.log(reverse('abcde'));
