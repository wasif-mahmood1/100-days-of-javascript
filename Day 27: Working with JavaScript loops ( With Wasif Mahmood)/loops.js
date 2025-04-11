// Day 27 of #100DaysOfJavaScript
// Topic: JavaScript For Loop

// Basic for loop syntax
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

// Using for loop with arrays
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

console.log("\nLooping through cars array:");
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// Omit Expression 1 (initialization)
console.log("\nOmitting initialization:");
let i = 2;
for (; i < cars.length; i++) {
  console.log(cars[i]);
}

// Initialize multiple values in Expression 1
console.log("\nMultiple initializations:");
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + " ";
  if (i === len - 1) console.log(text);
}

// Omit Expression 2 (condition) - use break
console.log("\nOmitting condition (with break):");
i = 0;
for (;; i++) {
  if (i === 5) break;
  console.log("i =", i);
}

// Omit Expression 3 (increment done inside)
console.log("\nOmitting increment (done manually):");
i = 0;
for (; i < 5;) {
  console.log("Manual increment i =", i);
  i++;
}

// Scope difference: var vs let
console.log("\nScope difference between var and let:");
var a = 5;
for (var a = 0; a < 3; a++) {
  console.log("Inside loop with var:", a);
}
console.log("Outside loop with var:", a); // Output: 3

let b = 5;
for (let b = 0; b < 3; b++) {
  console.log("Inside loop with let:", b);
}
console.log("Outside loop with let:", b); // Output: 5
