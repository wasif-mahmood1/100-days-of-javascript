// Day 68: JavaScript Function call() and Method Reuse

// Example 1: Object with a method using 'this'
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Example 1:", person.fullName()); // Output: "John Doe"

// Explanation:
// 'this' refers to the 'person' object, so 'this.firstName' is "John".

// ------------------------------

// Example 2: Reusing the fullName method with call()
const person1 = {
  firstName: "John",
  lastName: "Doe"
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe"
};

// Define a reusable fullName method in another object
const personUtil = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Example 2:", personUtil.fullName.call(person1)); // Output: "John Doe"
console.log("Example 3:", personUtil.fullName.call(person2)); // Output: "Mary Doe"

// Explanation:
// The call() method is used to invoke 'personUtil.fullName' on 'person1' and 'person2'.

// ------------------------------

// Example 3: Using call() with additional arguments
const person3 = {
  firstName: "John",
  lastName: "Doe"
};

const locationUtil = {
  fullNameWithLocation: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};

console.log("Example 4:", locationUtil.fullNameWithLocation.call(person3, "Oslo", "Norway")); 
// Output: "John Doe, Oslo, Norway"

// ------------------------------

// What is 'this'?
function showGlobalThis() {
  console.log("Global this (non-strict mode):", this);
}

showGlobalThis(); // In browsers, refers to 'window' object

// ------------------------------

// 'this' inside a function (strict mode)
function showThisStrict() {
  'use strict';
  console.log("Strict mode this:", this); // undefined
}

showThisStrict();

// ------------------------------

// 'this' in event handlers (in a browser environment)
/*
document.getElementById("myBtn").addEventListener("click", function() {
  console.log("Button clicked, this refers to:", this); // the button element
});
*/

// Note: The above DOM code will only run in a browser environment with an actual HTML element with id="myBtn"

// Summary:
// - All functions in JavaScript are methods if they belong to an object.
// - The call() method lets you borrow methods from one object and use them on another.
// - 'this' refers to the object calling the method and behaves differently in strict mode or globally.

