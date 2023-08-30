//const logMultiples = function(number) {
//  let start = number;
//  for (let i = start; i <= 100; i+= number) {
//    if (i % 2 !== 0) {
//      console.log(i);
//    }
//  }
//}

const logMultiples = function(number) {
  const start = 100;
  for (let i = start; i > 0; --i) {
    if (i % number === 0 && i % 2 !== 0) {
      console.log(i);
    }
  }
}

//logMultiples(17);
//logMultiples(21);


function logMultiplesImproved(num) {
  const START = (Math.floor(100/num) * num);
  for (i = START; i > 0; i -= num) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

logMultiplesImproved(17);
logMultiplesImproved(21);
