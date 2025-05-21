// Day 64 - JavaScript Object Protection

// === Using const to prevent re-assignment ===
const car = { type: "Fiat", model: "500", color: "white" };
// car = {} // ❌ This will throw an error due to const

// === Object.preventExtensions() ===
// Prevents adding new properties to the object
const person1 = { firstName: "John", lastName: "Doe" };
Object.preventExtensions(person1);

console.log("Is person1 extensible?", Object.isExtensible(person1)); // false
person1.nationality = "English"; // ❌ Will not be added in non-strict mode; throws in strict mode

// Prevent extensions on an array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
Object.preventExtensions(fruits1);
console.log("Is fruits1 extensible?", Object.isExtensible(fruits1)); // false
fruits1.push("Kiwi"); // ❌ Will not work in strict mode

// === Object.seal() ===
// Prevents adding and removing properties. Existing properties can still be changed.
"use strict";
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
Object.seal(person2);

console.log("Is person2 sealed?", Object.isSealed(person2)); // true
// delete person2.age; // ❌ Throws error in strict mode
person2.age = 51; // ✅ Allowed
console.log(person2);

// Seal an array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
Object.seal(fruits2);
console.log("Is fruits2 sealed?", Object.isSealed(fruits2)); // true
// fruits2.push("Kiwi"); // ❌ Throws error in strict mode

// === Object.freeze() ===
// Prevents any changes to the object
const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
Object.freeze(person3);

console.log("Is person3 frozen?", Object.isFrozen(person3)); // true
// person3.age = 60; // ❌ Throws error in strict mode
// delete person3.firstName; // ❌ Throws error in strict mode

// Freeze an array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits3);
console.log("Is fruits3 frozen?", Object.isFrozen(fruits3)); // true
// fruits3.push("Kiwi"); // ❌ Throws error in strict mode

// === Summary ===
// - Use const to prevent re-assignment.
// - Use preventExtensions() to disallow adding properties.
// - Use seal() to prevent adding/removing properties.
// - Use freeze() to prevent all modifications.
// - Use isExtensible(), isSealed(), isFrozen() to check protection status.
