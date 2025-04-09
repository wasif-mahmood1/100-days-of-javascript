// ✅ Day 25: JavaScript `if`, `else`, and `else if` Statements

// Conditional statements allow your program to make decisions and execute code blocks based on different conditions.

// ---

// 🔹 `if` Statement
// Executes a block of code **if a condition is true**.

if (condition) {
  // code to run if condition is true
}

// Example:
if (hour < 18) {
  greeting = "Good day";
}

// ---

// 🔹 `else` Statement
// Executes a block of code **if the condition is false**.

if (condition) {
  // if true
} else {
  // if false
}

// Example:
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// ---

// 🔹 `else if` Statement
// Checks **another condition** if the first is false.

if (condition1) {
  // if condition1 is true
} else if (condition2) {
  // if condition2 is true
} else {
  // if none are true
}

// Example:
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// ---

// 🎲 Random Example
// Randomly link to W3Schools or WWF:

let text;
if (Math.random() < 0.5) {
  text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  text = "<a href='https://wwf.org'>Visit WWF</a>";
}
document.getElementById("demo").innerHTML = text;

// ---

// ❌ Uppercase `If` is invalid
// ❌ This will throw an error:

// If (x > 5) {
//   console.log("This is wrong");
// }

// Always use **lowercase** `if`, `else`, and `else if`.

// ---

// 🧠 Quiz: True or False?  
// > JavaScript allows both lowercase `if` and uppercase `If` statements.  
// ✅ **False** – only lowercase is valid.

// ---

// Next up: 🔄 `switch` statements!
