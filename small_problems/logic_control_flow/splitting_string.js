function splitString(string, delimiter) {
  if ((typeof delimiter) !== 'string') {
    return(console.log('ERROR: No delimiter'));
  }

  //iterate through the string. 
  //if the string at that index is equal to the delimeter character, log the string from previous start to idx
  //set the previous start to the current index plus 1
  let startPos = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === delimiter || delimiter == '') {
      toLog = (delimiter === '' ? string[i] : ''); 
      while (startPos < i) {
        toLog += string[startPos];
        startPos += 1;
      }
      console.log(toLog);
      startPos += 1;
    }
  }
  if (delimiter !== '') {
    console.log(string.slice(startPos));
  }
}

splitString('ha ha', ' ');
splitString('hello', '');
splitString('haha', ';');
