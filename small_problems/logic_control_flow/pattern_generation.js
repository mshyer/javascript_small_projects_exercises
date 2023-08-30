function generatePattern(width) {
  //set starting stars to num - 1
  //set starting nums to 1
  //loop width times
  //log a string with the nums and stars
  //  using a while loop, add numbers to the string until number count reached,
  //iterate stars - 1
  //iterate nums + 1
  let stars = width - 1;
  let nums = 1;
  for (let i = 1; i <= width; i++) {
    result = '';
    for (let ii = 1; ii <= nums; ii++) {
      result += String(ii);
    }
    for (let ii = 1; ii <= stars; ii++) {
      //result += '*';
      //for (let iii = 1; iii <= String(i).length; iii++) {
      //  result += '*';
      //}
    }
    console.log(result);
    stars -= 1;
    nums += 1;
  }
}

//generatePattern(22);


function generateLargePattern(num) {
  let numsArr = [];
  for (let i = 1; i <= num; i++) {
    let str = '';
    for (let ii = 1; ii <= i; ii++) {
      str += String(ii);
    }

    numsArr.push(str);
  }
  const MAX_LENGTH = (numsArr[numsArr.length - 1]).length;
  numsArr.forEach(function(numString) {
    result = numString;
    for (let i = 1; i <= MAX_LENGTH - numString.length; i++) {
      result += '*';
    }
    console.log(result);
  });
}

generateLargePattern(22);
