const repeatedCharacters = function(string) {
  let chars = string.split('').map(element => element.toLowerCase());
  // iterate through the array of characters. 
  // For each character, add it to the object or increment the count by one
  // Filter out only the keys with values >= 2
  let repeats = {};
  for (let chr of chars) {
    if (!repeats[chr]) {
      repeats[chr] = 1;
    } else {
      repeats[chr] += 1;
    }
  }
  for (let key in repeats) {
    if (repeats[key] < 2) {
      delete repeats[key];
    }
  }
  return repeats;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }


