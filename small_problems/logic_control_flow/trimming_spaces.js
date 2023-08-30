const trim = function a (str) {
  let startIdx = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      startIdx = i;
    } else {
      break;
    }
  }
  let endIdx = str.length - 1;
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] === ' ') {
      endIdx = i;
    } else {
      break;
    }
  }
  console.log(startIdx);
  console.log(endIdx);
    return str.slice((startIdx + 1), (endIdx));
}

console.log(trim('   haha  haaha   '));
