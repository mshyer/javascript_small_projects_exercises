function indexOf(array, value) {
  let notFound = -1;
  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] === value) {
      return idx;
    }
  }

  return notFound;
}

console.log(indexOf([1, 2, 3, 3], 3));
console.log(indexOf([1, 2, 3], 4));


