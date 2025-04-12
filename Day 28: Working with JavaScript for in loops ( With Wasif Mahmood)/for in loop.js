// Day 28: JavaScript for...in Loop & Array.forEach()

// --- for...in with Objects ---
const person = {
  fname: "John",
  lname: "Doe",
  age: 25
};

let personText = "";
for (let key in person) {
  personText += person[key] + " ";
}
console.log("Person Info (using for...in):", personText); // Output: John Doe 25

// --- for...in with Arrays ---
const numbers = [45, 4, 9, 16, 25];

let resultForIn = "";
for (let index in numbers) {
  resultForIn += numbers[index] + " ";
}
console.log("Numbers (using for...in):", resultForIn); // Output: 45 4 9 16 25

// ⚠ Note: for...in is not ideal for arrays when order matters

// --- Array.forEach() ---
let resultForEach = "";
numbers.forEach(function(value) {
  resultForEach += value + " ";
});
console.log("Numbers (using forEach):", resultForEach); // Output: 45 4 9 16 25

// Alternate forEach version using arrow function
let resultArrow = "";
numbers.forEach(value => resultArrow += value + " ");
console.log("Numbers (using forEach with arrow function):", resultArrow); // Output: 45 4 9 16 25
