function randomBetween(min, max) {
  let difference = max - min;
  return (Math.round(Math.random() * (difference)) + min);
}
let num = -1;
while (num !== 200) {
  num = randomBetween(20, 200);
  console.log(`Teddy is ${num} years old!`);
}
