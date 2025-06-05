// Day 77: Asynchronous JavaScript
// Topic: Callbacks, setTimeout, setInterval

// Display function - could be replaced with actual DOM manipulation in HTML context
function myDisplayer(something) {
  console.log("Display:", something); // In browsers, this would typically be: document.getElementById("demo").innerHTML = something;
}

// Callback example with synchronous calculation
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum); // Using callback to handle the result
}

myCalculator(5, 5, myDisplayer); // Logs: Display: 10


// Asynchronous JavaScript Example: setTimeout
function sayILoveYou() {
  console.log("I love You !!"); // Replace with DOM output for HTML version
}

console.log("setTimeout will call sayILoveYou after 3 seconds...");
setTimeout(sayILoveYou, 3000); // Asynchronous, runs after 3 seconds


// Passing a full function directly as a callback to setTimeout
setTimeout(function () {
  myFunction("I love You !!!");
}, 4000);

function myFunction(value) {
  console.log("Delayed message:", value); // Simulate DOM update
}


// Asynchronous Example: setInterval (repeats every 1 second)
let intervalCount = 0;
const intervalId = setInterval(() => {
  let now = new Date();
  let timeString = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  console.log("Current Time:", timeString);

  intervalCount++;
  if (intervalCount >= 5) {
    clearInterval(intervalId);
    console.log("Stopped interval after 5 executions.");
  }
}, 1000);


// Callback Alternatives
// Callback hell and nested callbacks make code hard to manage
// Modern asynchronous JS uses Promises instead — covered in the next lesson

// Summary:
// - Asynchronous functions run in parallel with other code
// - `setTimeout` and `setInterval` allow execution after delays or at intervals
// - Callbacks pass logic as arguments to be executed later
// - In real projects, Promises and async/await are preferred for cleaner code

// End of Day 77
