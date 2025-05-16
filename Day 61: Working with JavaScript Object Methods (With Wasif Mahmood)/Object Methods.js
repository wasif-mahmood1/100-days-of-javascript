// Day 61: JavaScript Object Methods
// General Methods

// Copies properties from a source object to a target object
Object.assign(target, source);

// Example: Object.assign()
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = {firstName: "Anne", lastName: "Smith"};

Object.assign(person1, person2); // person1 now has the properties of person2

console.log(person1); 
// Output: {firstName: "Anne", lastName: "Smith", age: 50, eyeColor: "blue"}

// Creates an object from an existing object
const newObject = Object.create(person1);
console.log(newObject); 
// Output: {} (inherits properties from person1 but no properties itself)

// Returns an array of the key/value pairs of an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let entries = Object.entries(person);
console.log(entries);
// Output: [ ['firstName', 'John'], ['lastName', 'Doe'], ['age', 50], ['eyeColor', 'blue'] ]

// Creates an object from a list of key/value pairs
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const fruitObj = Object.fromEntries(fruits);
console.log(fruitObj);
// Output: { apples: 300, pears: 900, bananas: 500 }

// Returns an array of the keys of an object
const keys = Object.keys(person);
console.log(keys);
// Output: ['firstName', 'lastName', 'age', 'eyeColor']

// Returns an array of the property values of an object
const values = Object.values(person);
console.log(values);
// Output: ['John', 'Doe', 50, 'blue']

// Group objects according to a function (ES2024)
const items = [
  {name: "apples", quantity: 300},
  {name: "bananas", quantity: 500},
  {name: "oranges", quantity: 200},
  {name: "kiwi", quantity: 150}
];

function groupByQuantity({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

const groupedItems = Object.groupBy(items, groupByQuantity);
console.log(groupedItems);
// Output: { ok: [{name: "apples", quantity: 300}, {name: "bananas", quantity: 500}], low: [{name: "oranges", quantity: 200}, {name: "kiwi", quantity: 150}] }

// Looping through an object with for...in
const personInfo = {
  fname: "John",
  lname: "Doe",
  age: 25
};

let personDetails = "";
for (let key in personInfo) {
  personDetails += `${key}: ${personInfo[key]}<br>`;
}

console.log(personDetails);
// Output: fname: John lname: Doe age: 25

// Complete Object Reference:
// This is a placeholder for a more complete object reference. 
// You can look into the MDN JavaScript Object Reference for more examples and descriptions.
