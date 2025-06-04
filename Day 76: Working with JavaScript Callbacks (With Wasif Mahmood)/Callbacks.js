// Day 76: JavaScript Callbacks

// 1. Function Sequence Example
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

// Function to display output
function myDisplayer(message) {
  document.getElementById("demo").innerHTML += message + "<br>";
}

// Call in sequence
myFirst();
mySecond();

// 2. Reverse the call sequence
myDisplayer("--- Reversing ---<br>");
mySecond();
myFirst();

// 3. Traditional Calculation without callback
function myDisplayer2(result) {
  document.getElementById("demo").innerHTML += "Result: " + result + "<br>";
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer2(result);

// 4. Calculation with hardcoded display inside
function myCalculatorDirect(num1, num2) {
  let sum = num1 + num2;
  myDisplayer2(sum);
}

myCalculatorDirect(10, 10);

// 5. Callback Approach
function myCalculatorWithCallback(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

myCalculatorWithCallback(15, 5, myDisplayer2);

// 6. Using a Callback with Array Filtering
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// removeNeg uses a callback to determine filter condition
function removeNeg(numbers, callback) {
  const filteredArray = [];
  for (const num of numbers) {
    if (callback(num)) {
      filteredArray.push(num);
    }
  }
  return filteredArray;
}

// Provide callback as an arrow function
const positiveNumbers = removeNeg(myNumbers, (x) => x >= 0);

document.getElementById("demo").innerHTML += "Positive Numbers: " + positiveNumbers.join(", ") + "<br>";

// Summary:
// - A callback is a function passed into another function as an argument.
// - It gives you control over function execution order.
// - It becomes extremely useful in asynchronous operations, covered next.
