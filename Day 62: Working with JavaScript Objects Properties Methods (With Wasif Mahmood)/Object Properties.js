// Day 62:JavaScript Object Properties

// 1. Adding or Changing an Object Property using Object.defineProperty()
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Adding a new property
Object.defineProperty(person, "year", { value: "2008" });
console.log(person.year); // Output: 2008

// Changing a property value
Object.defineProperty(person, "language", { value: "NO" });
console.log(person.language); // Output: NO

// 2. Property Management Methods

// Adding or Changing multiple properties
Object.defineProperties(person, {
  "age": { value: 30 },
  "country": { value: "Norway" }
});
console.log(person.age); // Output: 30
console.log(person.country); // Output: Norway

// Accessing Property Descriptors
console.log(Object.getOwnPropertyDescriptor(person, "language"));

// Accessing all property descriptors
console.log(Object.getOwnPropertyDescriptors(person));

// Listing all properties of an object (including non-enumerable)
console.log(Object.getOwnPropertyNames(person));

// 3. Object.getPrototypeOf() - Accessing the Prototype
const prototype = Object.getPrototypeOf(person);
console.log(prototype); // Output: [Object: null prototype] {}

// 4. Property Attributes - Modifying attributes like writable, enumerable, configurable

// Example: Making a property read-only (non-writable)
Object.defineProperty(person, "language", { writable: false });
person.language = "SE"; // Attempt to modify it won't work
console.log(person.language); // Output: NO

// Example: Making a property non-enumerable
Object.defineProperty(person, "language", { enumerable: false });
console.log(Object.keys(person)); // Output: [ 'firstName', 'lastName', 'year', 'age', 'country' ]

// 5. Adding Getters and Setters

// Defining a getter for fullName
Object.defineProperty(person, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  }
});
console.log(person.fullName); // Output: John Doe

// Example: Counter with getter and setter
const obj = { counter: 0 };

// Define getters and setters for counter operations
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  }
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  }
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  }
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  }
});
Object.defineProperty(obj, "subtract", {
  set: function (i) {
    this.counter -= i;
  }
});

// Using the counter
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj.counter); // Output: 3

// 6. Prototype Properties
const proto = { greet: function() { return "Hello, " + this.firstName; } };
const child = Object.create(proto);
child.firstName = "Alice";
console.log(child.greet()); // Output: Hello, Alice

// 7. Using Object.keys() to list only enumerable properties
console.log(Object.keys(person)); // Output: [ 'firstName', 'lastName', 'year', 'age', 'country' ]
