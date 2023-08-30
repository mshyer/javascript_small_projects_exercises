function greetings(arr, obj) {
  let full_name = arr.join(' ');
  let title = obj['title'];
  let occupation = obj['occupation'];
  console.log(`Hello, ${full_name}! Nice to have a ${title} ${occupation} around.`);
}
greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
