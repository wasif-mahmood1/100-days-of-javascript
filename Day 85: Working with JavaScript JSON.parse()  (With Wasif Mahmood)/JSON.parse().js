// Day 85: JSON.parse() in JavaScript

// -----------------------------
// 1. Basic JSON Parsing
// -----------------------------

const jsonString = '{"name":"John", "age":30, "city":"New York"}';

// Convert JSON string to JavaScript object
const person = JSON.parse(jsonString);

// Displaying parsed data on a web page
document.body.innerHTML += `<p><strong>Basic Parsing:</strong> ${person.name}, ${person.age}, ${person.city}</p>`;

// -----------------------------
// 2. Parsing JSON Array
// -----------------------------

const carsJSON = '["Ford", "BMW", "Audi", "Fiat"]';
const cars = JSON.parse(carsJSON);

document.body.innerHTML += `<p><strong>Parsed Array:</strong> ${cars.join(", ")}</p>`;

// -----------------------------
// 3. Parsing Dates
// -----------------------------

const dateJSON = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const personWithDate = JSON.parse(dateJSON);
personWithDate.birth = new Date(personWithDate.birth);

document.body.innerHTML += `<p><strong>Parsed Date:</strong> ${personWithDate.name}, ${personWithDate.birth.toDateString()}</p>`;

// -----------------------------
// 4. Using Reviver Function
// -----------------------------

const reviverExample = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

const personWithReviver = JSON.parse(reviverExample, function (key, value) {
  if (key === "birth") {
    return new Date(value);
  }
  return value;
});

document.body.innerHTML += `<p><strong>Using Reviver:</strong> ${personWithReviver.name}, ${personWithReviver.birth.toDateString()}</p>`;

// -----------------------------
// 5. Parsing Function from String (Not Recommended)
// -----------------------------

const funcJSON = '{"name":"John", "age":"function () { return 30; }", "city":"New York"}';
const personWithFunction = JSON.parse(funcJSON);

// Convert string to function using eval (⚠️ Use with caution)
personWithFunction.age = eval("(" + personWithFunction.age + ")");

document.body.innerHTML += `<p><strong>Parsed Function:</strong> ${personWithFunction.name}, Age: ${personWithFunction.age()}</p>`;

// -----------------------------
// Notes:
// -----------------------------
// - JSON.parse() is used to convert JSON strings into JavaScript objects.
// - Always ensure the string is valid JSON format to avoid syntax errors.
// - Dates and functions are not supported in pure JSON and require manual handling.
// - Avoid using eval() due to security and performance risks.
