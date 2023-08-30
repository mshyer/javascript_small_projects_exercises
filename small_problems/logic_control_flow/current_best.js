function rot13(text) {
  const ASC_UPPER_MID = 78; 
  const ASC_LOWER_MID = 110;
  const ROT = 13; 

  let result = ''; 
  for (let chr of text ) { 
    let chrCode = chr.charCodeAt(0);

    if (!(/[a-zA-Z]/.test(chr))) {
      result += chr;
    } else if (/[A-Z]/.test(chr)) {
      result += (String.fromCharCode((chrCode >= ASC_UPPER_MID ? chrCode - ROT : chrCode + ROT)));
    } else {
      result += (String.fromCharCode((chrCode >= ASC_LOWER_MID ? chrCode - ROT : chrCode + ROT)));
    }   
  }

  return result;
}

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
