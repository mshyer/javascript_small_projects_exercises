function penultimate(string) {
  //let words = string.split(' ');
  //return words[words.length - 2];
  return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
