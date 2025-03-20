// Day 5: ES6 Destructuring in JavaScript

// Array Destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Swapping Variables
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b); // 20, 10

// Object Destructuring
let person = { name: "Wasif", age: 25, city: "Lahore" };
let { name, age, city } = person;
console.log(name, age, city); // Wasif  25 Lahore

// Destructuring with Default Values
let { country = "Pakistan" } = person;
console.log(country); // Pakistan

// Nested Object Destructuring
let student = { 
    info: { id: 101, major: "Computer Science" }
};
let { info: { id, major } } = student;
console.log(id, major); // 101 Computer Science

// Function Parameter Destructuring
function displayUser({ name, age }) {
    console.log(`User: ${name}, Age: ${age}`);
}
displayUser(person); // User: Wasif, Age: 25

// Challenge Task: Extract only even numbers from an array
function extractEvens(arr) {
    let evens = arr.filter(num => num % 2 === 0);
    return evens;
}
console.log(extractEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// Day 5: ES6 Destructuring in JavaScript

// Array Destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Swapping Variables
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b); // 20, 10

// Object Destructuring
let person = { name: "Wasif", age: 25, city: "Lahore" };
let { name, age, city } = person;
console.log(name, age, city); // Wasif  25 Lahore

// Destructuring with Default Values
let { country = "Pakistan" } = person;
console.log(country); // Pakistan

// Nested Object Destructuring
let student = { 
    info: { id: 101, major: "Computer Science" }
};
let { info: { id, major } } = student;
console.log(id, major); // 101 Computer Science

// Function Parameter Destructuring
function displayUser({ name, age }) {
    console.log(`User: ${name}, Age: ${age}`);
}
displayUser(person); // User: Wasif, Age: 25

// Challenge Task: Extract only even numbers from an array
function extractEvens(arr) {
    let evens = arr.filter(num => num % 2 === 0);
    return evens;
}
console.log(extractEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
