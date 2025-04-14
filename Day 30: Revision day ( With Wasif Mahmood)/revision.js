// 📘 Revision Recap: #100DaysOfJavaScript - Days 21 to 29

// --- 🔁 Day 21: JavaScript `includes()` ---
// Used to check if an array contains a certain value.
const fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); // true

// --- 🔁 Day 22: JavaScript `indexOf()` ---
// Finds the first index of a specified element.
const colors = ["red", "blue", "green"];
console.log(colors.indexOf("blue")); // 1

// --- 🔁 Day 23: JavaScript `find()` ---
// Returns the first element that satisfies a condition.
const ages = [12, 19, 25, 30];
const adult = ages.find(age => age >= 18);
console.log(adult); // 19

// --- 🔁 Day 24: JavaScript `findIndex()` ---
// Returns the index of the first element that satisfies a condition.
const scores = [50, 70, 90];
const index = scores.findIndex(score => score > 60);
console.log(index); // 1

// --- 🔁 Day 25: JavaScript `some()` and `every()` ---
// `some()` checks if at least one element satisfies a condition.
// `every()` checks if all elements satisfy a condition.
const nums = [1, 2, 3, 4, 5];
console.log(nums.some(n => n > 3)); // true
console.log(nums.every(n => n > 0)); // true

// --- 🔁 Day 26: JavaScript `switch` Statement ---
// Executes different blocks of code based on matching cases.
const day = new Date().getDay();
switch (day) {
  case 0: console.log("Sunday"); break;
  case 1: console.log("Monday"); break;
  default: console.log("Another day");
}

// --- 🔁 Day 27: JavaScript `for` Loop ---
// Loops with 3 expressions: initialization, condition, increment.
for (let i = 0; i < 5; i++) {
  console.log("Number:", i);
}

// --- 🔁 Day 28: JavaScript `for...in` Loop ---
// Loops over object properties (keys).
const person = { name: "Alice", age: 30 };
for (let key in person) {
  console.log(key, person[key]);
}

// --- 🔁 Day 29: JavaScript `for...of` Loop ---
// Loops over iterable values like arrays, strings.
const letters = ["a", "b", "c"];
for (let letter of letters) {
  console.log(letter);
}

// --- 🧠 Tip Recap ---
// - Use `for...in` for objects (keys).
// - Use `for...of` for arrays/strings (values).
// - Use `switch` for clean conditional branching.
// - Use array methods (`find`, `some`, `every`, etc.) for readable logic.
