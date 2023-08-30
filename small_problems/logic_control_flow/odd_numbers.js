//function logOddNumbers(num) {
//  let i = 1;
//  while (i <= num) {
//    if (i % 2 !== 0) {
//      console.log(i);
//    }
//    i += 1;
//  }
//}

//function logOddNumbers(num) {
//  let i = 1;
//  while (i <= num) {
//    console.log(i);
//    i += 2;
//  }
//}


//function logOddNumbers(num) {
//  let i = 1;
//  while (i <= num) {
//    if (i % 2 === 0) {
//      i += 1;
//      continue;
//    } else {
//      console.log(i);
//      i += 1
//    }
//  }
//}

function logOddNumbers(num) {
  for (let i = 1; i <= num; ++i) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i);
  }
}
logOddNumbers(19);
