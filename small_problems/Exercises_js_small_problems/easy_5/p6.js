function sequence(num) {
  let seq = Array.from({length: num}, (element, idx) => idx + 1)
  return seq;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
