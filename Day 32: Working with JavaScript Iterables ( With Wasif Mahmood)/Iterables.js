
// Day 32: JavaScript Iterables

// Iterating Over a String
const name = "W3Schools";
console.log("Iterating over a String:");
for (const x of name) {
  console.log(x);
}

// Iterating Over an Array
const letters = ["a", "b", "c"];
console.log("\nIterating over an Array:");
for (const x of letters) {
  console.log(x);
}

const numbers = [2, 4, 6, 8];
console.log("\nIterating over a different Array:");
for (const x of numbers) {
  console.log(x);
}

// Iterating Over a Set
const letterSet = new Set(["a", "b", "c"]);
console.log("\nIterating over a Set:");
for (const x of letterSet) {
  console.log(x);
}

// Iterating Over a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log("\nIterating over a Map:");
for (const [key, value] of fruits) {
  console.log(`${key}: ${value}`);
}

// Home Made Iterator (Not Iterable)
console.log("\nUsing a home made iterator (not iterable):");
function myNumbers() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    }
  };
}

const n = myNumbers();
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);

// Making an Object Iterable with Symbol.iterator
console.log("\nMaking a custom object iterable:");
const myIterableNumbers = {};
myIterableNumbers[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n === 100) done = true;
      return { value: n, done: done };
    }
  };
};

for (const num of myIterableNumbers) {
  console.log(num);
}

// Manually using Symbol.iterator
console.log("\nManually iterating using Symbol.iterator:");
let iterator = myIterableNumbers[Symbol.iterator]();
while (true) {
  const result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}
