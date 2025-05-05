// === Day 41: Bitwise Operations ===
console.log("=== Bitwise Operations ===");
let x = 5, y = 3;
console.log("x & y =", x & y);  // 1
console.log("x | y =", x | y);  // 7
console.log("x ^ y =", x ^ y);  // 6
console.log("~x =", ~x);        // -6
console.log("x << 1 =", x << 1); // 10
console.log("x >> 1 =", x >> 1); // 2
console.log("x >>> 1 =", x >>> 1); // 2

// === Day 42: Regular Expressions ===
console.log("\n=== Regular Expressions ===");
let str = "My phone number is 123-456-7890";
let regex = /\d{3}-\d{3}-\d{4}/;
console.log("Match found?", regex.test(str)); // true
console.log("Extracted:", str.match(regex)[0]); // 123-456-7890

// === Day 43: Operator Precedence ===
console.log("\n=== Operator Precedence ===");
let result = 3 + 4 * 5; // 3 + (4 * 5)
console.log("3 + 4 * 5 =", result); // 23
console.log("With parentheses (3 + 4) * 5 =", (3 + 4) * 5); // 35

// === Day 44: Error Handling ===
console.log("\n=== Error Handling ===");
try {
  throw new Error("Custom error!");
} catch (e) {
  console.log("Caught error:", e.message);
} finally {
  console.log("Finally block executed");
}

// === Day 45: Scope ===
console.log("\n=== Scope ===");
function outerScope() {
  let outerVar = "I'm outside!";
  function innerScope() {
    console.log(outerVar); // Closure example
  }
  innerScope();
}
outerScope();

// === Day 46: Hoisting ===
console.log("\n=== Hoisting ===");
console.log("varVar before declaration:", varVar); // undefined
var varVar = "I'm hoisted!";
// console.log(letVar); // ReferenceError
let letVar = "I'm block scoped!";

// === Day 47: Use Strict ===
console.log("\n=== Use Strict ===");
"use strict";
try {
  undeclaredVar = 42; // ReferenceError in strict mode
} catch (e) {
  console.log("Strict mode error:", e.message);
}

// === Day 48: this Keyword ===
console.log("\n=== this Keyword ===");
const obj = {
  name: "Wasif",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};
obj.greet(); // Hello, Wasif

function globalThisExample() {
  console.log("In non-strict mode, this is:", this);
}
globalThisExample();

// === Day 49: this Keyword (Arrow vs Regular) ===
console.log("\n=== this in Arrow vs Regular Functions ===");
const anotherObj = {
  value: 100,
  regular: function () {
    console.log("Regular:", this.value);
  },
  arrow: () => {
    console.log("Arrow:", this.value); // undefined or window/global
  }
};
anotherObj.regular();
anotherObj.arrow();
