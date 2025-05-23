// Day 66: JavaScript Function Parameters

// 1. Function Parameters and Arguments
function greetUser(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}
greetUser("John", "Doe"); // Arguments passed to the function

// Parameters are the variables listed in the function definition
// Arguments are the actual values passed when the function is called

// 2. Parameter Rules
// JavaScript does not enforce data types or number of arguments

function showInfo(name, age) {
  console.log("Name:", name);
  console.log("Age:", age);
}
showInfo("Alice"); // Age will be undefined

// 3. Default Parameters (pre-ES6 method)
function multiply(a, b) {
  if (b === undefined) {
    b = 1;
  }
  return a * b;
}
console.log(multiply(5)); // 5

// 4. Default Parameters (ES6 syntax)
function add(a, b = 10) {
  return a + b;
}
console.log(add(5)); // 15

// 5. Rest Parameters
function sumAllNumbers(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sumAllNumbers(4, 9, 16, 25, 29, 100, 66, 77)); // 326

// 6. The Arguments Object
function findMaxValue() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMaxValue(1, 123, 500, 115, 44, 88)); // 500

function sumArguments() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumArguments(1, 123, 500, 115, 44, 88)); // 871

// 7. Arguments Passed by Value
function modifyValue(val) {
  val = 100;
  console.log("Inside function:", val); // 100
}
let x = 50;
modifyValue(x);
console.log("Outside function:", x); // 50

// 8. Objects Passed by Reference
function updatePerson(person) {
  person.age = 30;
}
let user = { name: "Jane", age: 25 };
updatePerson(user);
console.log(user); // { name: "Jane", age: 30 }
