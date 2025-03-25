// 🚀 Day 9: JavaScript Revision - What We've Learned So Far!

// 1️⃣ Variables
var a = 10;
let b = 20;
const c = 30;
console.log(a + b + c); // Output: 60

// 2️⃣ Functions
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Aqib")); // Output: Hello, Aqib!

const multiply = (x, y) => x * y;
console.log(multiply(5, 3)); // Output: 15

// 3️⃣ Arrays - Removing duplicates using Set
const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

// 4️⃣ Objects
const person = { name: "Aqib Rafay Wasif Ibrahim", age: 25, city: "Lahore" };
console.log(person.name); // Output: Aqib Rafay Wasif Ibrahim

// 5️⃣ ES6 Destructuring
const user = { name: "Aqib", age: 25, city: "Lahore" };
const { name, city } = user;
console.log(name, city); // Output: Aqib Lahore

const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); // Output: red green

// 6️⃣ Sorting Arrays
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

const numArray = [40, 100, 1, 5, 25, 10];
numArray.sort((a, b) => a - b);
console.log(numArray); // Output: [1, 5, 10, 25, 40, 100]

// 7️⃣ Sorting Objects
const people = [
  { name: "Aqib", age: 30 },
  { name: "Wasif", age: 25 },
  { name: "Ibrahim", age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);
// Output: [{name: "Wasif", age: 25}, {name: "Aqib", age: 30}, {name: "Ibrahim", age: 35}]

// 8️⃣ Palindrome Check
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
