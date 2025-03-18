// Day 3: Arrays in JavaScript

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = new Array(1, 2, 3, 4, 5);

// Adding and Removing Elements
let colors = ["Red", "Green", "Blue"];
colors.push("Yellow");  // Adds to the end
colors.pop();           // Removes from the end
colors.unshift("Purple"); // Adds to the beginning
colors.shift();          // Removes from the beginning

// Iterating Through an Array
let cars = ["Toyota", "Honda", "Ford"];
cars.forEach(car => console.log(car)); // Using forEach

// Finding Elements
let nums = [10, 20, 30, 40, 50];
console.log(nums.includes(30));  // true
console.log(nums.indexOf(20));   // 1
console.log(nums.find(num => num > 25)); // 30

// Transforming an Array
let values = [1, 2, 3, 4, 5];
let squared = values.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

let evenNumbers = values.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

let sum = values.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Challenge Task: Remove Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
