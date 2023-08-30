const pop = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }
  
  let last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(pop(arr));
console.log(arr);

console.log(pop([]));
