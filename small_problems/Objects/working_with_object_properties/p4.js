const wordCount = function(string) {
  let keys = string.split(' ');
  // init empty object
  // iterate through the words array
  //   if the output object doesn't have key, add it to the output
  //   if it does, iterate it by one
  let words = string.split(' ');
  let wordCounts = {};
  for (let word of words) {
    if (!wordCounts.hasOwnProperty(word)) {
      wordCounts[word] = 0;
    } //else {
      //wordCounts[word] = 1;
    //}
    wordCounts[word] += 1;
  }

  return wordCounts;
}

console.log(wordCount('box car cat bag box'));
