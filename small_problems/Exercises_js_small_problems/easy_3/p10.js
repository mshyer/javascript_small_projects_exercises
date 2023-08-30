//function wordSizes(string) {
//  let count = {};
//  if (string === '') return {};
//
//  let words = string.split(/\s+/);
//  words.forEach(word => {
//    let wordLength = (word.replace(/[^a-zA-Z]/, '')).length
//    if (count[wordLength]) {
//      count[wordLength] += 1;
//    } else {
//      count[wordLength] = 1;
//    }
//  });
//
//  return count;
//}

function wordSizes(string) {
  if (string === '') return {};
  string = string.replace(/[^ a-z]/gi, '');
  let wordCounts = string.split(/\s+/).map(word => word.length);
  
  let counter = wordCounts.reduce((acc, wordLength) => 
    (acc[wordLength] = (acc[wordLength] || 0) + 1, acc), {});
  return counter;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
