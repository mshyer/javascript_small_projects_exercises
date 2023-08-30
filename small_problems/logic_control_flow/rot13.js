const ROT = 13;
const ascLowerStart = 97;
const ascUpperStart = 65;
// 97 - 110
// 65 - 78
// if the character is not letter, return character
// if the character is capital, return (either plus 13 or minus 13 depending on middle const
// if the character is lowercase, return (eithe plus 13 or minus 13 depending on middle const.
function rotDirection(chrCode) {
  if ((chrCode >= (ascLowerStart + ROT)) ||
     (chrCode >= (ascUpperStart + ROT) && chrCode < ascLowerStart)) {
       return false;
     }
  return true;
}

function rotShift(chr) {
  let ascCode = chr.charCodeAt(0);
  let shiftCode = ((rotDirection(ascCode) ? (ascCode + ROT) : (ascCode - ROT)));
  return String.fromCharCode(shiftCode);
}

const rot13 = function(str) {
  let result = '';
  for (let chr of str) {
    result += (/[a-zA-Z]/.test(chr) ? rotShift(chr) : chr);
  }
  return result;
}

console.log(rot13(rot13('Teachers open the Door, but you must enter by yourself.')));
