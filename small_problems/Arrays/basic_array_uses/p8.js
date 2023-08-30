function endsOf(beginningArr, endingArr) {
  //let endsArr = [];
  //endsArr.push(beginningArr[0]);
  //endsArr.push(endingArr.slice(-1)[0]);
  //return endsArr;
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));
