// 1. Basic Function Declaration
function addNumbers(a, b) {
    return a + b;
}
console.log("Sum of 3 and 5:", addNumbers(3, 5));  // Outputs: 8

// 2. Function Expression (Anonymous Function)
const multiplyNumbers = function(a, b) {
    return a * b;
};
console.log("Product of 4 and 7:", multiplyNumbers(4, 7));  // Outputs: 28

// 3. Arrow Function
const divideNumbers = (a, b) => a / b;
console.log("Division of 10 by 2:", divideNumbers(10, 2));  // Outputs: 5

// 4. Parameters with Default Values
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet("Alice");  // Outputs: Hello, Alice!
greet();         // Outputs: Hello, Guest!

// 5. Function Returning a Value
function getGreeting() {
    return "Hello, JavaScript!";
}
console.log(getGreeting());  // Outputs: Hello, JavaScript!

// 6. Function with Multiple Return Values (Returning an Array)
function getUserInfo() {
    const name = "John";
    const age = 30;
    return [name, age];
}
const [name, age] = getUserInfo();
console.log(`Name: ${name}, Age: ${age}`);  // Outputs: Name: John, Age: 30
