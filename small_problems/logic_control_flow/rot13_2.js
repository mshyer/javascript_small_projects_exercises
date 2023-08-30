function rotate(ascCode) {
  const ASC_UPPER_MID = 78;
  const ASC_LOWER_MID = 110;
  const ROT = 13;
  return (ascCode >= ASC_UPPER_MID ? (ascCode - ROT) : ascCode + ROT);
}

function rot13(text) {
  let result = '';
  for (let chr of text ) {
    let chrCode = chr.charCodeAt(0);

    if (!(/[a-zA-Z]/.test(chr))) {
      result += chr;
    } else if (/[A-Z]/.test(chr)) {
      result += (String.fromCharCode(rotate(chrCode)));
    } else {
      result += (String.fromCharCode((chrCode >= ASC_LOWER_MID ? chrCode - ROT : chrCode + ROT)));
    }
  }

  return result;
}

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
