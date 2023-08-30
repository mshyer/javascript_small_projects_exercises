var template = $('#handlebars-demo').html();

var templateScript = Handlebars.compile(template);

var context = {
  name: 'mikmik',
  occupation: 'dev',
  language: 'javascript',
  adjective: 'great!',
  exclamation: '<b>Wowee!</b>',
};

var html = templateScript(context);

$(document.body).append(html);
