function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      return this.name + ' is located in ' + this.continent + '.'
      + ` I ${this.visited ? 'have' : 'haven\'t'} visited ${name}.`;
    },

    visitCountry() {
      this.visited = true;
    },
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."
console.log(southAfrica.visited); // "The Republic of South Africa is located in Africa."
southAfrica.visitCountry();
console.log(southAfrica.visited);
console.log(southAfrica.getDescription());
