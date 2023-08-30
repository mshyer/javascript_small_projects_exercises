function multiplesOfThreeAndFive() {
  const max = 100;
  for (let i = 1; i <= max; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(String(i) + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    } 
  }
}

//multiplesOfThreeAndFive();

//further exploration

const multiplesThreeFiveRange = function(min, max) {
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(String(min) + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}

multiplesThreeFiveRange(3, 55);
