// Day 46: JavaScript Hoisting

// ===========================
// 📌 What is Hoisting?
// ===========================
// Hoisting is JavaScript's default behavior of moving declarations
// (but NOT initializations) to the top of the current scope.

// ===========================
// 📌 Variable Used Before Declaration (var)
// ===========================
// Example 1: Using variable before declaration (works because of hoisting)
x = 5; // Assign 5 to x
console.log("Example 1 - x before declaration:", x); // Outputs: 5
var x; // x is hoisted

// Example 2: Standard usage (same as above but more readable)
var y;
y = 10;
console.log("Example 2 - y after declaration:", y); // Outputs: 10

// ===========================
// 📌 What Really Happens (Behind the Scenes)
// ===========================
// JavaScript interprets the above code like this:
var x_hoisted;
x_hoisted = 5;
console.log("Hoisted interpretation of x:", x_hoisted);

// ===========================
// 📌 Hoisting with let and const
// ===========================
// Variables declared with let and const are hoisted BUT are in a "temporal dead zone"
// They cannot be accessed before declaration.

// Example - ReferenceError
try {
  carName = "Volvo"; // ❌ ReferenceError
  let carName;
} catch (err) {
  console.log("Error with let hoisting:", err.message);
}

// Example - SyntaxError (const)
try {
  carBrand = "Toyota"; // ❌ SyntaxError
  const carBrand;
} catch (err) {
  console.log("Error with const hoisting:", err.message);
}

// ===========================
// 📌 Only Declarations Are Hoisted (NOT Initializations)
// ===========================

// Example 1 - both declared before use
var a = 5;
var b = 7;
console.log("Example 1 - a and b:", a, b); // Outputs: 5 7

// Example 2 - declaration of b is hoisted, but value is undefined
var c = 10;
console.log("Example 2 - c and d:", c, d); // d is undefined
var d = 20;

// Example 2 is interpreted as:
var d_hoisted;
var c_hoisted = 10;
console.log("Hoisted version - c:", c_hoisted, "d:", d_hoisted); // d_hoisted = undefined
d_hoisted = 20;

// ===========================
// 📌 Best Practice
// ===========================
// Always declare variables at the top of their scope
// to avoid bugs and confusion due to hoisting.

// Strict mode helps catch undeclared variables
"use strict";
try {
  undeclaredVar = 100; // ❌ ReferenceError in strict mode
} catch (err) {
  console.log("Strict mode error:", err.message);
}

// ===========================
// 🧠 Exercise
// ===========================
x = 5;
alert(x);
var x;

// What is the output?
// ✅ Answer: 5
// Because `var x` is hoisted, the assignment happens before the alert,
// effectively working like:
// var x;
// x = 5;
// alert(x);

// ===========================
// ✅ End of JavaScript Hoisting Summary
// ===========================
