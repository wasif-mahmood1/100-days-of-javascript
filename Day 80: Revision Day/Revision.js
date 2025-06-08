// Day 80 - Revision: JavaScript Concepts Recap (Day 71–79)
// With Wasif Mahmood

// ==============================
// Day 71 - bind()
// ==============================
console.log("Day 71 - bind()");
const person = {
  name: "Wasif",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
const greet = person.greet.bind(person);
greet(); // Hello, Wasif

// ==============================
// Day 72 - Closures
// ==============================
console.log("\nDay 72 - Closures");
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}
const newFunction = outerFunction("Closure");
newFunction("Works!");

// ==============================
// Day 73 - Classes
// ==============================
console.log("\nDay 73 - Classes");
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.

// ==============================
// Day 74 - Class Inheritance
// ==============================
console.log("\nDay 74 - Class Inheritance");
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
const pet = new Dog("Buddy");
pet.speak(); // Buddy barks.

// ==============================
// Day 75 - Static Methods
// ==============================
console.log("\nDay 75 - Static Methods");
class MathUtil {
  static square(x) {
    return x * x;
  }
}
console.log("Square of 5:", MathUtil.square(5)); // 25

// ==============================
// Day 76 - Callbacks
// ==============================
console.log("\nDay 76 - Callbacks");
function greeting(name) {
  console.log(`Hello, ${name}`);
}
function processUserInput(callback) {
  const name = "Wasif";
  callback(name);
}
processUserInput(greeting); // Hello, Wasif

// ==============================
// Day 77 - Asynchronous JavaScript
// ==============================
console.log("\nDay 77 - Asynchronous JavaScript");
console.log("Start");
setTimeout(() => {
  console.log("Async Timeout (2s)");
}, 2000);
console.log("End");

// ==============================
// Day 78 - Promises
// ==============================
console.log("\nDay 78 - Promises");
let promiseExample = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected.");
  }
});
promiseExample.then(
  value => console.log(value),
  error => console.log(error)
);

// ==============================
// Day 79 - Async/Await
// ==============================
console.log("\nDay 79 - Async/Await");
async function asyncFunction() {
  let delayedPromise = new Promise(resolve => {
    setTimeout(() => resolve("Resolved after 1s"), 1000);
  });

  let result = await delayedPromise;
  console.log(result);
}
asyncFunction();
