let elem1 = document.querySelector('#elem1');
let elem4 = document.querySelector('#elem4');

elem1.addEventListener('click', event => alert(event.currentTarget.id), {capture: true,});
elem4.addEventListener('click', event => alert(event.currentTarget.id));
