function randomBetween(min, max) {
  let rando = NaN;
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  let difference = max - min + 1;
  return (Math.floor((Math.random() * difference) + min)); 
}

console.log(randomBetween(50, 1000));
console.log(randomBetween(1, 5));
