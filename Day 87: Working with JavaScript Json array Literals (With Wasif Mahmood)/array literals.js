// Day 87: JSON Array Literals in JavaScript

// ✅ JSON Array Literal as a string
let jsonString = '["Ford", "BMW", "Fiat"]';

// This is a JSON-formatted string that represents an array.
// JSON arrays can contain: string, number, object, array, boolean, or null.
// Example: Valid JSON array literal inside a JSON string

// ✅ Parsing JSON string into a JavaScript array
let myArray = JSON.parse(jsonString);

console.log("Parsed JavaScript array from JSON string:", myArray);
// Output: ["Ford", "BMW", "Fiat"]

// ✅ Accessing array values
console.log("First car:", myArray[0]);
// Output: Ford

// ✅ JSON object with an array property
let myObj = {
  name: "John",
  age: 30,
  cars: ["Ford", "BMW", "Fiat"]
};

console.log("Accessing a car from object:", myObj.cars[0]);
// Output: Ford

// ✅ Looping through the array inside the object using for...in loop
console.log("Loop using for...in:");
for (let i in myObj.cars) {
  console.log(myObj.cars[i]);
}

// ✅ Looping through the array using traditional for loop
console.log("Loop using traditional for loop:");
for (let i = 0; i < myObj.cars.length; i++) {
  console.log(myObj.cars[i]);
}

// 🎯 Challenge: Parse and print car names from a JSON string
let carData = '{"cars": ["Tesla", "Audi", "Mercedes"]}';
let parsedData = JSON.parse(carData);

console.log("Challenge Output:");
for (let i = 0; i < parsedData.cars.length; i++) {
  console.log(parsedData.cars[i]);
}

/*
📌 Summary:
- JSON arrays are enclosed in [] and often come as strings.
- Use JSON.parse() to convert JSON strings to JS objects/arrays.
- JS arrays are more flexible than JSON arrays.
- You can loop and access elements just like regular arrays.
*/

console.log("✅ Day 86 Complete!");
