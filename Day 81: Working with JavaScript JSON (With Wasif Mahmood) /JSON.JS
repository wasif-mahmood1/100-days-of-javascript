// Day 81 - JavaScript: JSON Introduction
// JSON - JavaScript Object Notation

console.log("Day 81 - JSON Introduction");

// ==============================
// What is JSON?
// ==============================
// - JSON stands for JavaScript Object Notation
// - A text-based format for storing and exchanging data
// - Lightweight, self-describing, and easy to read/write

// Example JSON string
const jsonString = '{"name":"John", "age":30, "car":null}';
console.log("JSON String:", jsonString);

// ==============================
// JSON.parse() - Convert JSON string to JavaScript object
// ==============================
const jsonObject = JSON.parse(jsonString);

console.log("Parsed Object:", jsonObject);
console.log("Name:", jsonObject.name);
console.log("Age:", jsonObject.age);
console.log("Car:", jsonObject.car);

// ==============================
// JSON.stringify() - Convert JavaScript object to JSON string
// ==============================
const person = {
  name: "Alice",
  age: 28,
  job: "Developer",
  skills: ["JavaScript", "React", "Node.js"]
};

const personJSON = JSON.stringify(person);
console.log("JavaScript Object as JSON String:", personJSON);

// ==============================
// Sending and Receiving JSON
// ==============================
// Imagine receiving this from a server
const serverResponse = '{"id":101,"title":"Learn JSON","completed":false}';
const task = JSON.parse(serverResponse);

console.log("Task Title:", task.title);

// Imagine sending this to a server
const newTask = {
  id: 102,
  title: "Practice JSON",
  completed: true
};

const dataToSend = JSON.stringify(newTask);
console.log("Data to send to server:", dataToSend);

// ==============================
// Storing JSON (Text Format)
// ==============================
// JSON makes it easy to store structured data as text

const userProfile = {
  username: "wasifdev",
  active: true,
  preferences: {
    theme: "dark",
    language: "en"
  }
};

const storedData = JSON.stringify(userProfile);
console.log("Stored User Profile:", storedData);

// Simulating loading from storage
const loadedData = JSON.parse(storedData);
console.log("Loaded Username:", loadedData.username);
console.log("User Theme:", loadedData.preferences.theme);

// ==============================
// Summary
// ==============================
// ✅ JSON is useful for storing and exchanging data
// ✅ Use JSON.parse() to convert JSON strings into JS objects
// ✅ Use JSON.stringify() to convert JS objects into JSON strings
// ✅ JSON is language-independent and widely supported

// Originally specified by Douglas Crockford
