// 🚀 Day 12: JavaScript Array Search Methods

// 1️⃣ indexOf() - Returns the first occurrence index of an element or -1 if not found
const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple")); // Output: 0
console.log(fruits.indexOf("Banana")); // Output: -1

// 2️⃣ lastIndexOf() - Returns the last occurrence index of an element
console.log(fruits.lastIndexOf("Apple")); // Output: 2

// 3️⃣ includes() - Checks if an element exists in the array (true/false)
console.log(fruits.includes("Mango")); // Output: true
console.log(fruits.includes("Banana")); // Output: false

// 4️⃣ find() - Returns the first element that satisfies a condition
const numbers = [4, 9, 16, 25, 29];
const firstLarge = numbers.find(num => num > 18);
console.log(firstLarge); // Output: 25

// 5️⃣ findIndex() - Returns the index of the first matching element
console.log(numbers.findIndex(num => num > 18)); // Output: 3

// 6️⃣ findLast() (ES2023) - Returns the last element that satisfies a condition
const temps = [27, 28, 30, 40, 42, 35, 30];
console.log(temps.findLast(temp => temp > 40)); // Output: 42

// 7️⃣ findLastIndex() (ES2023) - Returns the index of the last matching element
console.log(temps.findLastIndex(temp => temp > 40)); // Output: 4
