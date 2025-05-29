// ===============================
// Day 72: JavaScript Closures
// ===============================

// Global Variable Example
let globalCounter = 0;
function globalAdd() {
  globalCounter += 1;
  return globalCounter;
}
console.log("Global Counter (should increase):");
console.log(globalAdd()); // 1
console.log(globalAdd()); // 2
console.log(globalAdd()); // 3

// Problem with Global Variable:
// Anyone can modify globalCounter directly, which is bad for encapsulation

// Local Variable Example
function localAdd() {
  let localCounter = 0;
  localCounter += 1;
  return localCounter;
}
console.log("\nLocal Counter (always returns 1):");
console.log(localAdd()); // 1
console.log(localAdd()); // 1
console.log(localAdd()); // 1

// The issue: localCounter resets every time the function is called

// Closures to the Rescue
function createCounter() {
  let counter = 0; // Private variable
  return function() {
    counter++;
    return counter;
  };
}

// Using closure
const add = createCounter(); // Returns the inner function that "remembers" the counter

console.log("\nClosure Counter (should increase):");
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3

// Another Independent Closure
const anotherAdd = createCounter();
console.log("\nAnother Closure Counter (independent):");
console.log(anotherAdd()); // 1
console.log(anotherAdd()); // 2

// Nested Function Example
function outerFunction() {
  let message = "Hello from outer scope!";
  function innerFunction() {
    console.log(message); // Inner has access to outer's scope
  }
  return innerFunction;
}

const greet = outerFunction();
console.log("\nNested Function Access:");
greet(); // Outputs: Hello from outer scope!

// Use Case: Simulating Private Variables
function secretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(newSecret) {
      secret = newSecret;
    }
  };
}

const mySecret = secretHolder("Initial Secret");
console.log("\nPrivate Variable via Closure:");
console.log(mySecret.getSecret()); // Initial Secret
mySecret.setSecret("Updated Secret");
console.log(mySecret.getSecret()); // Updated Secret

// Summary
console.log("\nSummary:");
console.log("Closures allow functions to 'remember' variables from their lexical scope.");
console.log("They help create private variables and preserve state across calls.");

/*
Key Takeaways:
1. Closures happen when a function retains access to its outer scope, even after the outer function has returned.
2. Used to create private variables and maintain state.
3. Often used in modules, event handlers, or functional programming patterns.
*/
