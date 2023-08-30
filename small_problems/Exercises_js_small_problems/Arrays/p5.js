const pop = function(arr) {
  let last = arr[arr.length - 1];
  arr.length = Math.max(arr.length - 1, 0);
  return last;
}

const push = function(arr, ...args) {
  for (let arg of args) {
    arr[arr.length] = arg;
  }
  return arr.length;
}

let arr = [1, 2];

console.log(pop(arr));
console.log(arr);

console.log(push(arr, [1, 'dandy'], ['hue', 'randy'], 5, 6, 'candy'));
console.log(arr);

pop([]);

