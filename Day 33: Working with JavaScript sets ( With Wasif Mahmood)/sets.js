
// Day 33: JavaScript Sets

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

// How to Create a Set

// 1. Passing an array to new Set()
const setFromArray = new Set(["a", "b", "c"]);
console.log("Set from array:", setFromArray);

// 2. Create an empty set and use add() to add values
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log("Set after adding values:", letters);

// 3. Create a Set and add variables
const a = "a";
const b = "b";
const c = "c";
letters.add(a);
letters.add(b);
letters.add(c);
console.log("Set after adding variables:", letters);

// Using add() method to add more elements
letters.add("d");
letters.add("e");
console.log("Set after more additions:", letters);

// Adding duplicate values - only the first is stored
letters.add("c");
letters.add("c");
letters.add("c");
console.log("Set after adding duplicates:", letters);

// Listing elements using for...of
let text = "";
for (const x of letters) {
  text += x + " ";
}
console.log("Elements in the Set:", text.trim());

// Sets are objects
console.log("Type of Set:", typeof letters); // object
console.log("Is instance of Set:", letters instanceof Set); // true

// Browser Support (Not executable in this file, just info)
// Chrome 51, Edge 15, Firefox 54, Safari 10, Opera 38
// Set is not supported in Internet Explorer
