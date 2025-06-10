// Day 82: JSON Syntax in JavaScript

// Introduction to JSON (JavaScript Object Notation)
// JSON is a syntax for storing and exchanging data.
// JSON is a subset of JavaScript object syntax.

// ------------------ JSON Syntax Rules ------------------
// 1. Data is in name/value pairs
// 2. Data is separated by commas
// 3. Curly braces hold objects
// 4. Square brackets hold arrays

// ------------------ JSON Name/Value Pair ------------------
// A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value.

const jsonExample = '{"name":"John"}'; // This is valid JSON (as a string)

// ------------------ JSON vs JavaScript Object ------------------

// JSON:
const jsonString = '{"name":"John"}'; // keys and string values MUST use double quotes

// JavaScript object (more flexible):
const jsObject = { name: 'John' }; // keys can be unquoted, values can use single quotes

// ------------------ JSON Valid Value Types ------------------
// JSON supports:
// - string
// - number
// - object (JSON object)
// - array
// - boolean
// - null

const jsonData = `{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "skills": ["JavaScript", "Python", "C++"],
  "address": { "city": "Paris", "zip": "75001" },
  "graduated": null
}`;

// ------------------ JavaScript Values ------------------
// JavaScript supports all JSON types PLUS:
// - function
// - undefined
// - date objects
// These are NOT valid in JSON.

const jsData = {
  name: "Alice",
  age: 25,
  greet: function () {
    return "Hello";
  }, // Not allowed in JSON
  createdAt: new Date(), // Not valid in JSON
  unknown: undefined // Not valid in JSON
};

// ------------------ JavaScript Object Access ------------------

const person = { name: "John", age: 31, city: "New York" };

// Accessing object values
console.log(person.name);       // Output: John
console.log(person["name"]);    // Output: John

// Modifying values
person.name = "Gilbert";
console.log(person.name);       // Output: Gilbert

person["name"] = "Thomas";
console.log(person["name"]);    // Output: Thomas

// ------------------ JavaScript Arrays as JSON ------------------

const jsonArray = `["Apple", "Banana", "Cherry"]`; // JSON array as a string
const jsArray = ["Apple", "Banana", "Cherry"];     // JavaScript array

// ------------------ JSON Files & MIME Type ------------------
// JSON data is typically stored in files with the ".json" extension.
// The MIME type for JSON is "application/json".

// Example JSON File Content:
/*
{
  "employees": [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
  ]
}
*/

// ------------------ Summary ------------------
// - JSON is a lightweight format for data exchange.
// - Very close to JavaScript object syntax, but stricter.
// - Use JSON.parse() to convert JSON strings to JavaScript objects.
// - Use JSON.stringify() to convert JavaScript objects to JSON strings.

// Coming up next: Parsing JSON and converting between JS objects and JSON!
