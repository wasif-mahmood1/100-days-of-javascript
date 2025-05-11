// Day 56 of JavaScript: Common Mistakes

// 1. Accidentally Using Assignment Instead of Comparison
let x = 0;

if (x == 10) {
  console.log("x is 10 (== comparison)");
}

if (x = 10) { // Assignment, not comparison!
  console.log("This runs because x = 10 is truthy!");
}

x = 0;
if (x = 0) {
  console.log("This does NOT run, because x = 0 is falsy.");
}

// 2. Loose vs Strict Comparison
let a = 10;
let b = "10";

if (a == b) {
  console.log("Loose comparison passed");
}

if (a === b) {
  console.log("Strict comparison passed");
} else {
  console.log("Strict comparison failed");
}

// switch uses strict comparison
let y = 10;
switch (y) {
  case 10:
    console.log("Matched as number");
    break;
  case "10":
    console.log("Matched as string"); // won't run
    break;
}

// 3. Addition vs Concatenation
let num1 = 10;
num1 = 10 + 5; // 15
console.log("Addition:", num1);

let num2 = 10;
num2 += "5"; // "105" - string concatenation
console.log("Concatenation:", num2);

// 4. Float Precision Issue
let f1 = 0.1;
let f2 = 0.2;
let result = f1 + f2; // Not exactly 0.3
console.log("Imprecise float:", result);

let corrected = (f1 * 10 + f2 * 10) / 10;
console.log("Corrected float:", corrected);

// 5. Breaking Strings Incorrectly
let str1 = "Hello \
World!";
console.log(str1);

// let str2 = "Hello
// World!"; // Syntax error!

// 6. Misplaced Semicolon
let value = 19;
if (value == 19); {
  console.log("This block executes even if condition is false.");
}

// 7. Return Statement Pitfalls
function correctReturn(a) {
  return a * 10;
}

function brokenReturn(a) {
  return
  a * 10; // JavaScript interprets this as return;
}

console.log("Correct return:", correctReturn(2));
console.log("Broken return:", brokenReturn(2)); // undefined

// 8. Arrays with Named Indexes
const personArray = [];
personArray[0] = "John";
personArray[1] = "Doe";
console.log("Array length:", personArray.length); // 2

const wrongArray = [];
wrongArray["firstName"] = "John"; // Converts array into object
console.log("Wrong array length:", wrongArray.length); // 0
console.log("wrongArray[0]:", wrongArray[0]); // undefined

// 9. Trailing Commas
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 46, // OK in modern JS, but bad for older browsers or JSON
};

const points = [40, 100, 1, 5, 25, 10]; // Trailing comma removed for safety

// 10. Undefined vs Null
let myObj;

if (typeof myObj === "undefined") {
  console.log("myObj is undefined");
}

// This will throw error if myObj is not declared:
// if (myObj === null) console.log("myObj is null");

if (typeof myObj !== "undefined" && myObj !== null) {
  console.log("myObj is defined and not null");
}

// ---------------
// Summary
// ---------------
// ✔ Use === instead of ==
// ✔ Watch out for automatic semicolon insertion
// ✔ Be cautious with float math
// ✔ Avoid mixing strings and numbers with +
// ✔ Never break return statements
// ✔ Don't use named indexes on arrays
// ✔ Be careful with trailing commas (especially in JSON)
// ✔ Always test for undefined before testing for null
