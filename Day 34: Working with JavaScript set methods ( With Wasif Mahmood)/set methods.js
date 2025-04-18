// Day 34: JavaScript Set Methods

// 1. The new Set() Method
// Create a Set with an array
const letters = new Set(["a", "b", "c"]);
console.log("Initial Set:", letters); // Set { 'a', 'b', 'c' }

// 2. The add() Method
// Add new values to the Set
letters.add("d");
letters.add("e");
console.log("After adding 'd' and 'e':", letters); // Set { 'a', 'b', 'c', 'd', 'e' }

// Adding duplicates will not change the Set
letters.add("a");  // Duplicate, will not be added
letters.add("b");  // Duplicate, will not be added
console.log("After trying to add duplicates:", letters); // Set { 'a', 'b', 'c', 'd', 'e' }

// 3. Listing Set Elements using for..of Loop
let text = "";
for (const x of letters) {
  text += x;
}
console.log("List of Set elements (for..of loop):", text); // "abcde"

// 4. The has() Method
// Check if a value exists in the Set
console.log("'d' is in the Set:", letters.has("d"));  // true
console.log("'z' is in the Set:", letters.has("z"));  // false

// 5. The forEach() Method
// Iterate over Set elements using forEach()
text = "";
letters.forEach(function(value) {
  text += value;
});
console.log("List of Set elements (forEach method):", text); // "abcde"

// 6. The values() Method
// Get an iterator for Set values and loop through them
const myIterator = letters.values();
text = "";
for (const entry of myIterator) {
  text += entry;
}
console.log("List of Set values (values() method):", text); // "abcde"

// 7. The keys() Method
// Returns an iterator (same as values() for Sets)
const keysIterator = letters.keys();
text = "";
for (const x of keysIterator) {
  text += x;
}
console.log("List of Set keys (keys() method):", text); // "abcde"

// 8. The entries() Method
// Get an iterator for Set entries [value, value] and loop through them
const entriesIterator = letters.entries();
text = "";
for (const entry of entriesIterator) {
  text += entry;
}
console.log("List of Set entries (entries() method):", text); // "a,a,b,b,c,c,d,d,e,e"
