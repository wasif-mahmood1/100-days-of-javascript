// Day 53 of JavaScript: JSON Basics

// JSON stands for JavaScript Object Notation
// It is a lightweight format for storing and transporting data
// Often used to exchange data between a server and a web application

// ----------------------
// Example JSON structure
// ----------------------
const jsonText = `
{
  "employees": [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
  ]
}
`;

// ----------------------------
// Convert JSON string to JS object
// ----------------------------
const jsonObj = JSON.parse(jsonText); // Parses the JSON string into a JS object

console.log("Employee List:");
jsonObj.employees.forEach((emp, index) => {
  console.log(`${index + 1}. ${emp.firstName} ${emp.lastName}`);
});

// --------------------------
// JSON syntax rules summary:
// --------------------------
// - Data is in name/value pairs: "key": "value"
// - Data is separated by commas
// - Curly braces {} hold objects
// - Square brackets [] hold arrays
// - Names must be in double quotes

// --------------------------
// Example: JSON object
// --------------------------
const person = {
  "firstName": "Alice",
  "lastName": "Wonderland",
  "age": 28,
  "isEmployee": true
};

// --------------------------
// Convert JS object to JSON string
// --------------------------
const jsonString = JSON.stringify(person);
console.log("Converted JS object to JSON string:");
console.log(jsonString);

// --------------------------
// Using JSON in HTML (for demonstration)
// --------------------------
// Simulate setting inner HTML content like a webpage example
function showEmployeeInfo(index) {
  if (jsonObj.employees[index]) {
    const employee = jsonObj.employees[index];
    console.log(`Selected Employee: ${employee.firstName} ${employee.lastName}`);
    // Simulate document.getElementById("demo").innerHTML = ...
  } else {
    console.log("Employee not found.");
  }
}

// Example usage:
showEmployeeInfo(1); // Outputs: Anna Smith
