// Day 24: JavaScript Comparison and Logical Operators

// Comparison Operators
let x = 5;
console.log(x == 8);      // false
console.log(x == 5);      // true
console.log(x == "5");   // true

console.log(x === 5);     // true
console.log(x === "5");  // false

console.log(x != 8);      // true
console.log(x !== 5);     // false
console.log(x !== "5");  // true
console.log(x !== 8);     // true

console.log(x > 8);       // false
console.log(x < 8);       // true
console.log(x >= 8);      // false
console.log(x <= 8);      // true

// Using Comparison in Conditional Statements
let age = 17;
let text;
if (age < 18) {
  text = "Too young to buy alcohol";
}
console.log(text);

// Logical Operators
let y = 3;
console.log(x < 10 && y > 1);   // true
console.log(x == 5 || y == 5);   // false
console.log(!(x == y));         // true

// Conditional (Ternary) Operator
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable);

// Comparing Different Types
console.log(2 < 12);         // true
console.log(2 < "12");       // true
console.log(2 < "John");     // false
console.log(2 > "John");     // false
console.log(2 == "John");    // false
console.log("2" < "12");     // false
console.log("2" > "12");     // true
console.log("2" == "12");    // false

// Safer Comparison with Type Conversion
age = "twenty";
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
console.log(voteable);

// Nullish Coalescing Operator (??)
let name = null;
let text2 = "missing";
let result = name ?? text2;
console.log(result);  // "missing"

// Optional Chaining Operator (?.)
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car?.name);  // undefined
