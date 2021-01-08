// arrow function expression syntax

// const squareArrow = (x) => {
//   return x * x;
// }
const squareArrow = (x) => x * x;
console.log(squareArrow(4));

// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1));

const user = {
  name: 'Nick',
  cities: ['New York', 'Washington', 'San Jose'],
  printPlacesLived() {
    // es6 function binding replacement
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
