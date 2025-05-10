// Day 55 of JavaScript: JavaScript Style Guide

// ------------------------------
// Variable Naming Conventions
// ------------------------------

// Use camelCase for variable and function names
let firstName = "John";
let lastName = "Doe";

let price = 19.90;
let tax = 0.20;
let fullPrice = price + (price * tax);

// ------------------------------
// Spaces Around Operators & Commas
// ------------------------------
let x = 10 + 5;
const cars = ["Volvo", "Saab", "Fiat"];

// ------------------------------
// Code Indentation
// ------------------------------
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// ------------------------------
// Statement Rules
// ------------------------------

// Always end simple statements with semicolons
const person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
  eyeColor: "green"
};

// Complex statements: bracket formatting
if (price > 10) {
  console.log("Price is high");
} else {
  console.log("Price is reasonable");
}

for (let i = 0; i < 3; i++) {
  console.log("Loop iteration:", i);
}

// ------------------------------
// Object Formatting
// ------------------------------

// Proper spacing and punctuation
const user = {
  username: "js_dev",
  email: "dev@example.com",
  loggedIn: true
};

// One-liner object (acceptable for small objects)
const product = {name: "Pen", price: 2.5, inStock: true};

// ------------------------------
// Line Length
// ------------------------------

// Break long lines after operators or commas
document.getElementById("demo").innerHTML =
  "Welcome to the JavaScript Style Guide demo.";

// ------------------------------
// Naming Conventions
// ------------------------------

// camelCase for variables and functions
function calculateTotal(price, tax) {
  return price + (price * tax);
}

// UPPERCASE for constants
const PI = 3.14159;

// Avoid using $ or _ at the start unless necessary
let userAge = 25;

// ------------------------------
// File Naming
// ------------------------------
// Use lowercase file names: example `day55.js`
// Avoid: `Day55.JS`, `Day_55.js`

// ------------------------------
// Performance Notes
// ------------------------------
// Use whitespace and indentation for readability during development
// Minify code for production to improve performance

// ------------------------------
// Script Loading (in HTML)
// ------------------------------
// <script src="day55.js"></script>

// ------------------------------
// Element Access Example
// ------------------------------
// const obj = document.getElementById("demo"); // Make sure the ID matches exactly

// ------------------------------
// Summary
// ------------------------------
// Consistency, readability, and maintainability are key in writing good JavaScript.
// Follow style conventions to avoid common mistakes and make collaboration easier.
