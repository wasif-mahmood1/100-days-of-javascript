// Day 65: JavaScript Function Definitions

// Function Declaration
function multiplyDeclaration(a, b) {
  return a * b;
}
console.log("Function Declaration:", multiplyDeclaration(4, 3));

// Function Expression
const multiplyExpression = function (a, b) {
  return a * b;
};
console.log("Function Expression:", multiplyExpression(4, 3));

// Using Function Expression as a Variable
let result = multiplyExpression(4, 3);
console.log("Function Expression Used via Variable:", result);

// Function() Constructor
const multiplyConstructor = new Function("a", "b", "return a * b");
console.log("Function Constructor:", multiplyConstructor(4, 3));

// Function Hoisting (calling before declaration)
console.log("Function Hoisting:", hoistedFunction(5));
function hoistedFunction(y) {
  return y * y;
}

// Self-Invoking Function Expression
(function () {
  let x = "Hello!! I invoked myself!";
  console.log("Self-Invoking Function:", x);
})();

// Functions as Values
function multiply(a, b) {
  return a * b;
}
let funcValue = multiply(4, 3);
console.log("Function as a Value:", funcValue);

// Function Used in an Expression
let expressionResult = multiply(4, 3) * 2;
console.log("Function in Expression:", expressionResult);

// Function Properties and Methods
function argumentLength(a, b) {
  return arguments.length;
}
console.log("Arguments Length:", argumentLength(1, 2, 3));

function toStringExample(a, b) {
  return a * b;
}
let functionAsString = toStringExample.toString();
console.log("Function as String:\n", functionAsString);

// Arrow Function (ES6+)
const arrowMultiply = (x, y) => x * y;
console.log("Arrow Function:", arrowMultiply(5, 6));

// Arrow Function with Curly Braces and Return
const arrowWithReturn = (x, y) => { return x * y };
console.log("Arrow Function with Return:", arrowWithReturn(7, 8));

// Note: Arrow functions don't have their own `this` and are not hoisted

// Object Method Example
const obj = {
  value: 10,
  method: function () {
    return this.value * 2;
  }
};
console.log("Object Method:", obj.method());

// Constructor Function Example
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Alice", 30);
console.log("Constructor Function:", person1);
