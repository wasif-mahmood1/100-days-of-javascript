// Day 29: JavaScript for...of Loop

// --- Looping over an Array ---
const cars = ["BMW", "Volvo", "Mini"];

let carText = "";
for (let car of cars) {
  carText += car + " ";
}
console.log("Cars (using for...of):", carText); // Output: BMW Volvo Mini

// --- Looping over a String ---
let language = "JavaScript";

let charText = "";
for (let char of language) {
  charText += char + " ";
}
console.log("Characters (using for...of):", charText); // Output: J a v a S c r i p t

// --- Exercise Example ---
const fruits = ['Apple', 'Banana', 'Orange'];
for (let x of fruits) {
  console.log(x);
}
// Output:
// Apple
// Banana
// Orange

// ✅ The for...of loop gives values directly (not indexes) and works on iterable objects like arrays and strings.
