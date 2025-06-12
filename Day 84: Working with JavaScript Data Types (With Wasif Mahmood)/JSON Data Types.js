// Day 84 - Understanding JSON Data Types in JavaScript

// JSON Data Types
// In JSON, values must be one of the following data types:
// 1. String
// 2. Number
// 3. Object (JSON Object)
// 4. Array
// 5. Boolean
// 6. Null

// Invalid Data Types in JSON:
// 1. Function
// 2. Date
// 3. Undefined

// Example of valid JSON data types

// 1. JSON Strings
const jsonString = '{"name": "John"}'; // Strings must be in double quotes
console.log("Valid JSON String:", jsonString);

// 2. JSON Numbers
const jsonNumber = '{"age": 30}'; // Numbers can be integers or floats
console.log("Valid JSON Number:", jsonNumber);

// 3. JSON Objects
const jsonObject = '{"employee": {"name": "John", "age": 30, "city": "New York"}}';
console.log("Valid JSON Object:", jsonObject);

// 4. JSON Arrays
const jsonArray = '{"employees": ["John", "Anna", "Peter"]}';
console.log("Valid JSON Array:", jsonArray);

// 5. JSON Booleans
const jsonBoolean = '{"sale": true}'; // Boolean values are either true or false
console.log("Valid JSON Boolean:", jsonBoolean);

// 6. JSON null
const jsonNull = '{"middlename": null}'; // null can be used as a value
console.log("Valid JSON Null:", jsonNull);

// Invalid JSON Examples (Not allowed in JSON):

// 1. Functions (Not allowed in JSON)
const jsonFunction = '{"greet": function() { return "Hello"; }}'; // This will throw an error in JSON as functions are not allowed.
console.log("Invalid JSON Function:", jsonFunction);

// 2. Dates (Not allowed in JSON)
const jsonDate = '{"date": new Date()}'; // JSON does not support Date objects directly
console.log("Invalid JSON Date:", jsonDate);

// 3. Undefined (Not allowed in JSON)
const jsonUndefined = '{"data": undefined}'; // JSON cannot have undefined values
console.log("Invalid JSON Undefined:", jsonUndefined);

// Parsing JSON in JavaScript

// Converting JSON string into JavaScript object using JSON.parse()
const parsedObject = JSON.parse('{"name": "John", "age": 30, "city": "New York"}');
console.log("Parsed JSON Object:", parsedObject);

// Converting JavaScript object into JSON string using JSON.stringify()
const stringifiedObject = JSON.stringify(parsedObject);
console.log("Stringified JavaScript Object:", stringifiedObject);

// Conclusion:
// JSON is a lightweight format for storing and transporting data. It's commonly used for APIs and server-client communication.
// Remember, JSON is text-based and only supports simple data types like strings, numbers, booleans, arrays, objects, and null.

