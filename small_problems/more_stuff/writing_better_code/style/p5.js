function read(pages) {
      console.log('You started reading.');
      for (let page=0; page<pages; page++) {
              let message = 'You read page '+page;
              console.log(message);
      }
}

read(400);

// space between operators and operants
// don't use unary increment operators
// use two spaces for indent
// use explicit string coercion
// Use named function expressions instead of function declarations

const read = function(pages) {
  console.log('You Started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read the page ' + (page).toString(10);
    console.log(message);
  }
};

read(400);
