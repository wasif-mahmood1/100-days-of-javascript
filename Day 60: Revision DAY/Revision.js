// Day 60 Revision - JavaScript Concepts Summary (Day 51 to Day 59)

// Day 51: JavaScript Classes (ES6)
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.


// Day 52: JavaScript Modules
// utils.js (imaginary module)
// export function greet(name) {
//     return `Hello, ${name}`;
// }

// main.js (this file)
// import { greet } from './utils.js';
// console.log(greet("Ali"));


// Day 53: JSON Basics
const person = {
    name: "Ayesha",
    age: 28,
    isStudent: false
};

const jsonString = JSON.stringify(person); // Convert to JSON string
console.log(jsonString);

const parsedPerson = JSON.parse(jsonString); // Convert back to object
console.log(parsedPerson);


// Day 54: Debugging Practice
function addNumbers(a, b) {
    debugger; // Set breakpoint here
    return a + b;
}

console.log(addNumbers(3, 5)); // Use browser dev tools for debugging


// Day 55: JavaScript Style Guide
// Follow camelCase for variable names, use const/let instead of var
const userName = "wasif";
function getUserGreeting(name) {
    return `Hello, ${name}`;
}
console.log(getUserGreeting(userName));


// Day 56: Common Mistakes
// Mistake: Using == instead of ===
const value = "5";
if (value === 5) {
    console.log("Strict equality: value is 5");
} else {
    console.log("Use === to avoid type coercion");
}


// Day 57: Reserved Words
// Avoid using reserved words like 'class', 'return', 'function' as identifiers
// let function = "test"; // ❌ Invalid
let myFunctionName = "valid"; // ✅ Valid


// Day 58: Object Definitions
const car = {
    make: "Toyota",
    model: "Corolla",
    start() {
        console.log(`${this.make} ${this.model} is starting...`);
    }
};

car.start();


// Day 59: Object Prototypes
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Ahmed");
person1.sayHello();

