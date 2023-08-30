function wordSizes(string) {
  // split the string by spaces
  // for each word, count its length.
  // If the object has a key for that length, increment by 1
  // If not, add the length string as key to the object
  // Return the object
  let count = {};
  if (string === '') return {};

  let words = string.split(/\s+/);
  words.forEach(word => {
    if (count[word.length]) {
      count[word.length] += 1;
    } else {
      count[word.length] = 1;
    }
  });

  return count;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
