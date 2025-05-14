// Day 59: JavaScript Object Prototypes
// Continuing from Day 58: Object Constructors and Definitions

// Object Constructor Function
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
}

// Creating instances
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// === Incorrect way of adding a property (does not work as expected) ===
// This will not add 'nationality' to each Person instance
Person.nationality = "English";

// === Correct way: Add property inside the constructor function ===
function PersonWithNationality(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  this.nationality = "English"; // now each instance has this property
}
const person1 = new PersonWithNationality("Liam", "Smith", 30, "brown");
console.log(person1.nationality); // English

// === Better way: Use Prototype for Shared Properties ===
Person.prototype.nationality = "English";

// Now all Person instances inherit 'nationality' from the prototype
console.log(myFather.nationality); // English
console.log(myMother.nationality); // English

// === Adding a Method to the Prototype ===
Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

console.log(myFather.fullName()); // John Doe
console.log(myMother.fullName()); // Sally Rally

// === Adding Another Method ===
Person.prototype.isAdult = function() {
  return this.age >= 18;
};

console.log(myFather.isAdult()); // true
console.log(myMother.isAdult()); // true

// === Prototype Chain Explained ===
console.log(myFather.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// === Custom Constructor without nationality ===
function Animal(type, name) {
  this.type = type;
  this.name = name;
}

const dog = new Animal("Dog", "Buddy");
console.log(dog.nationality); // undefined (since not inherited from Person.prototype)

// === Important Note ===
// Always modify your own custom constructors' prototypes.
// Avoid modifying built-in prototypes like Object.prototype or Array.prototype directly.
// Doing so can break functionality or conflict with future JavaScript versions.

console.log("=== Day 59 Complete: JavaScript Prototypes Demo ===");
