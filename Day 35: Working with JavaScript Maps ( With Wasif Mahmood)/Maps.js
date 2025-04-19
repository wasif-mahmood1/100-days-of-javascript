
// Day 35: JavaScript Maps

// What is a Map?
// A Map holds key-value pairs where keys can be any datatype.
// A Map remembers the original insertion order of the keys.

console.log("Day 35: JavaScript Maps");

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Accessing Map values
console.log("Apples:", fruits.get("apples")); // 500

// Adding Elements
fruits.set("pears", 150);
console.log("Added pears:", fruits.get("pears")); // 150

// Checking Size
console.log("Map Size:", fruits.size); // 4

// Deleting Elements
fruits.delete("bananas");
console.log("Deleted bananas. Size:", fruits.size); // 3

// Checking for Keys
console.log("Has oranges?", fruits.has("oranges")); // true
console.log("Has bananas?", fruits.has("bananas")); // false

// Looping over a Map
console.log("Looping through Map:");
for (const [key, value] of fruits) {
  console.log(key, ":", value);
}

// Using forEach
console.log("Using forEach:");
fruits.forEach((value, key) => {
  console.log(key + " = " + value);
});

// Clearing the Map
fruits.clear();
console.log("Map cleared. Size:", fruits.size); // 0

// Map Keys can be Objects
const myMap = new Map();
const objKey = { id: 1 };
myMap.set(objKey, "value associated with object key");

console.log("Map with object key:", myMap.get(objKey));

// typeof returns "object"
console.log("Type of Map:", typeof fruits); // object

// instanceof Map returns true
console.log("Is fruits a Map?", fruits instanceof Map); // true

// Browser Support Note:
// Map is an ES6 feature and supported in all modern browsers except Internet Explorer.
