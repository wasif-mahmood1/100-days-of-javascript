// Day 86: JSON Object Literals

// This is a JSON string
const jsonString = '{"name":"John", "age":30, "car":null}';

// JSON object literals are inside this string:
// {"name":"John", "age":30, "car":null}

// JSON object literals are surrounded by curly braces {}
// They contain key/value pairs. Keys must be strings, values can be:
// string, number, object, array, boolean, or null

// IMPORTANT: JSON is a *string format*, not a JavaScript object.
// When parsed, it becomes a JavaScript object.

console.log("Original JSON string:", jsonString);

// Converting JSON string to JavaScript object
const myObj = JSON.parse(jsonString);

console.log("Converted JavaScript object:", myObj);

// Accessing object values

// Using dot notation
const nameDot = myObj.name;
console.log("Accessed using dot notation:", nameDot); // Output: John

// Using bracket notation
const nameBracket = myObj["name"];
console.log("Accessed using bracket notation:", nameBracket); // Output: John

// Looping through object keys using for...in
let keysText = "Keys: ";
for (const key in myObj) {
  keysText += key + ", ";
}
console.log(keysText); // Output: Keys: name, age, car,

// Looping through object values using for...in
let valuesText = "Values: ";
for (const key in myObj) {
  valuesText += myObj[key] + ", ";
}
console.log(valuesText); // Output: Values: John, 30, null,

// Summary Comments:
// - JSON is a string format used to store data
// - JSON object literals use the same syntax as JavaScript objects but must be strings
// - Use JSON.parse() to convert JSON strings to JavaScript objects
// - Access values using dot or bracket notation
// - Loop through objects using for...in

// Done with Day 86 🚀
