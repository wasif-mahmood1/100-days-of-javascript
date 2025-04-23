// Day 39: JavaScript Destructuring

// ===== Object Destructuring =====
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Basic destructuring
let { firstName, lastName } = person;
console.log(firstName); // "John"
console.log(lastName);  // "Doe"

// Order doesn't matter
let { lastName: ln, firstName: fn } = person;
console.log(fn); // "John"
console.log(ln); // "Doe"

// Default values
let { country = "US" } = person;
console.log(country); // "US"

// Alias properties
let { lastName: name } = person;
console.log(name); // "Doe"

// ===== String Destructuring =====
let site = "W3Schools";
let [a1, a2, a3, a4, a5] = site;
console.log(a1, a2, a3, a4, a5); // "W 3 S c h"

// ===== Array Destructuring =====
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Basic array destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1); // "Bananas"
console.log(fruit2); // "Oranges"

// Skipping values
let [firstFruit,,,lastFruit] = fruits;
console.log(firstFruit); // "Bananas"
console.log(lastFruit);  // "Mangos"

// Array index destructuring
let { 0: f1, 1: f2 } = fruits;
console.log(f1); // "Bananas"
console.log(f2); // "Oranges"

// ===== Rest Property =====
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [n1, n2, ...rest] = numbers;
console.log(n1, n2);  // 10 20
console.log(rest);    // [30, 40, 50, 60, 70]

// ===== Destructuring Maps =====
const fruitMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let mapText = "";
for (const [key, value] of fruitMap) {
  mapText += `${key} is ${value}\n`;
}
console.log(mapText);

// ===== Swapping Variables =====
let x = "Apple";
let y = "Banana";
[x, y] = [y, x];
console.log(x); // "Banana"
console.log(y); // "Apple"

// ===== Exercise =====
const fruitArray = ['Apple', 'Banana', 'Cherry'];
let [fruitX, fruitY] = fruitArray;
console.log(fruitX); // "Apple"
