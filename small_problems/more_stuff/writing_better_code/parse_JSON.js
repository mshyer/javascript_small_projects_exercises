function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an Error if "data" is invalid
  } catch (error) {
    // We run this code if JSON.parse throws an Error
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', error.name, 'parsing JSON data:', error.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
                    //       Unexpected token i in JSON at position 0"
                    // Logs "Finished parsing data."
                    // Returns null
