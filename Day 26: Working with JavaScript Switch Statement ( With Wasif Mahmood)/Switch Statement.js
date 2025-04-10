// ✅ Day 26 of 100 Days of JavaScript
// 🔀 JavaScript Switch Statement

/*
The switch statement is used to perform different actions based on different conditions.
It evaluates an expression and matches the expression's value to a case clause.
*/

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown Day";
}

console.log("Today is", day);

// 📌 The break keyword prevents fall-through to the next case.
// 📌 If no matching case is found, the default case is executed.

// Example with default and fall-through:
let message;
switch (new Date().getDay()) {
  case 6:
  case 0:
    message = "It's the Weekend!";
    break;
  default:
    message = "Looking forward to the Weekend!";
}

console.log(message);

// 🚨 Strict Comparison
let x = "0";
switch (x) {
  case 0:
    console.log("Off");
    break;
  case 1:
    console.log("On");
    break;
  default:
    console.log("No value found");
}

// Output will be "No value found" because switch uses strict (===) comparison.

// ✅ Summary:
// - switch evaluates an expression and matches it against case values using ===
// - break prevents code from falling through to other cases
// - default handles unmatched cases
// - multiple cases can share the same code block
