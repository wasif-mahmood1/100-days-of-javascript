// Day 69 - JavaScript .apply() Method

// 1. Method Reuse with apply()
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
};

console.log("1. Method reuse:");
console.log(person.fullName.apply(person1)); // "Mary Doe"


// 2. apply() with Arguments
const personWithLocation = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};

const person2 = {
  firstName: "John",
  lastName: "Doe"
};

console.log("\n2. apply() with arguments:");
console.log(personWithLocation.fullName.apply(person2, ["Oslo", "Norway"])); // "John Doe, Oslo, Norway"


// 3. Compare with call()
console.log("\n3. call() with arguments:");
console.log(personWithLocation.fullName.call(person2, "Oslo", "Norway")); // "John Doe, Oslo, Norway"


// 4. Using apply() to simulate Math.max() on an array
const numbers = [1, 2, 3];

console.log("\n4. Math.max with apply():");
console.log(Math.max(1, 2, 3));                      // Regular usage: 3
console.log(Math.max.apply(null, numbers));         // Using apply: 3
console.log(Math.max.apply(Math, numbers));         // Still works: 3
console.log(Math.max.apply(" ", numbers));          // Still works: 3
console.log(Math.max.apply(0, numbers));            // Still works: 3

// 5. Note on Strict Mode
// In strict mode, if the first argument is not an object, it becomes the owner of the function call.
// In non-strict mode, it defaults to the global object.
(function() {
  "use strict";

  function showThis() {
    return this;
  }

  console.log("\n5. In strict mode, non-object first argument:");
  console.log(showThis.apply(42)); // Will not be the global object
})();
