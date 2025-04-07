// Day 23 - JavaScript Booleans

// Booleans represent true or false values
let isAvailable = true;
let isLoggedIn = false;

// Boolean() function can be used to evaluate expressions
console.log(Boolean(10 > 9)); // true
console.log(10 > 9);          // true (simpler way)

// Comparison examples
let age = 20;
console.log(age < 18); // false

// Truthy values (evaluate to true)
console.log(Boolean(100));       // true
console.log(Boolean("Hello"));  // true
console.log(Boolean("false"));  // true
console.log(Boolean(7 + 1));     // true

// Falsy values (evaluate to false)
console.log(Boolean(0));         // false
console.log(Boolean(-0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
console.log(Boolean(false));     // false
console.log(Boolean(NaN));       // false

// Boolean as object (not recommended)
let primitiveBool = false;
let objectBool = new Boolean(false);

console.log(typeof primitiveBool); // "boolean"
console.log(typeof objectBool);    // "object"

// Comparison
console.log(primitiveBool == objectBool);  // true
console.log(primitiveBool === objectBool); // false

// Two Boolean objects are never strictly equal
let a = new Boolean(false);
let b = new Boolean(false);
console.log(a === b); // false
