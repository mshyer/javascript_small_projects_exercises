function retrieveSchedules() {
  let request = new XMLHttpRequest();
  request.timeout = 5000;
  request.open('GET', '/api/schedules');
  request.responseType = 'json';

  request.addEventListener('load', () => {
    console.log(request.response)
    console.log(request.response.length);
  });


  request.send();
}


