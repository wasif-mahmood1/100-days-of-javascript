// Day 67 - JavaScript Function Invocation

// 1. Invoking a Function as a Function
function multiply(a, b) {
  return a * b;
}

console.log("Function invocation (multiply):", multiply(10, 2)); // 20
console.log("Global invocation using window object (multiply):", window.multiply(10, 2)); // 20 (in browser)

// 2. The `this` Keyword in Different Contexts

// Function invocation - global context
function showThis() {
  return this;
}

console.log("this in function (non-strict mode):", showThis()); // window (in browser)

// Object with method using `this`
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Method invocation (person.fullName):", person.fullName()); // "John Doe"

// Returning `this` from a method
const personWithThis = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this;
  }
};

console.log("Method invocation returning `this`:", personWithThis.fullName()); // [object Object]

// 3. Constructor Function Invocation
function PersonConstructor(first, last) {
  this.firstName = first;
  this.lastName = last;
}

const newPerson = new PersonConstructor("John", "Doe");

console.log("Constructor invocation - new object:", newPerson);
console.log("Accessing property from constructed object:", newPerson.firstName); // "John"

// Strict mode example
"use strict";
function strictShowThis() {
  return this;
}

console.log("this in function (strict mode):", strictShowThis()); // undefined

// Summary Logs
console.log("\n--- Summary ---");
console.log("Function called as function: multiply(10,2) =", multiply(10, 2));
console.log("Function called as method: person.fullName() =", person.fullName());
console.log("Function called as constructor: new PersonConstructor('John', 'Doe') =", newPerson);
console.log("this in non-strict function call:", showThis());
console.log("this in strict function call:", strictShowThis());
