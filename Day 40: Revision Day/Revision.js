// Day 40: Revision of Day 31 to Day 39 (With Wasif Mahmood)

// Day 31: JavaScript Break and Continue
// - 'break' exits a loop early.
// - 'continue' skips the current iteration
// Example:
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log("Break/Continue Example -", i);
}

// Day 32: JavaScript Iterables
// - Objects that can be iterated with 'for...of'
// - Includes Arrays, Strings, Sets, Maps
// Example:
const name = "Wasif";
for (const char of name) {
  console.log("Iterating string:", char);
}

// Day 33: JavaScript Sets
// - Stores unique values
// - Created using new Set()
// Example:
const mySet = new Set(["a", "b", "a"]);
console.log("Set content:", [...mySet]);

// Day 34: JavaScript Set Methods
// - add(), delete(), has(), clear(), size
mySet.add("c");
console.log("Set has 'b':", mySet.has("b"));

// Day 35: JavaScript Maps
// - Key-value pairs where keys can be any type
const myMap = new Map();
myMap.set("name", "Wasif");
myMap.set("age", 22);

// Day 36: JavaScript Map Methods
// - set(), get(), delete(), has(), clear(), size
console.log("Map value for 'name':", myMap.get("name"));

// Day 37: JavaScript typeof and Data Types
// - typeof returns type of a variable
console.log("typeof 123:", typeof 123);
console.log("typeof 'hello':", typeof "hello");

// Day 38: JavaScript Type Conversion
// - Implicit and explicit type conversion
console.log("String(123):", String(123));
console.log("Number('456'):", Number("456"));

// Day 39: JavaScript Destructuring
// - Extract values from arrays or objects
const [a, b] = [1, 2];
const {name: userName, age} = {name: "Wasif", age: 22};
console.log("Destructured values:", a, b, userName, age);
