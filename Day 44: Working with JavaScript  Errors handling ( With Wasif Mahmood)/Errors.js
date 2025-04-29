// Day 44: JavaScript Errors - Throw, Try...Catch...Finally

// Example 1: Basic try-catch for a misspelled function
try {
  adddlert("Welcome guest!"); // Misspelled on purpose
} catch (err) {
  console.log("Caught an error: " + err.message);
}

// Example 2: Custom error throwing and catching based on input validation
function validateInput(input) {
  try {
    if (input.trim() === "") throw "Input is empty";
    if (isNaN(input)) throw "Input is not a number";
    const num = Number(input);
    if (num < 5) throw "Number is too low";
    if (num > 10) throw "Number is too high";
    console.log("Valid input: " + num);
  } catch (err) {
    console.log("Validation error: " + err);
  } finally {
    console.log("Validation attempt finished.\n");
  }
}

// Example calls
validateInput("");          // Throws "Input is empty"
validateInput("abc");       // Throws "Input is not a number"
validateInput("3");         // Throws "Number is too low"
validateInput("12");        // Throws "Number is too high"
validateInput("7");         // Passes

// Example 3: Error object properties
try {
  let num = 1;
  num.toPrecision(500); // Will throw a RangeError
} catch (err) {
  console.log("Error Name: " + err.name);       // RangeError
  console.log("Error Message: " + err.message); // Message detail
}

// Example 4: ReferenceError
try {
  x = y + 1; // y is not defined
} catch (err) {
  console.log("Reference Error caught: " + err.name);
}

// Example 5: SyntaxError using eval
try {
  eval("alert('Hello)"); // Syntax error
} catch (err) {
  console.log("Syntax Error caught: " + err.name);
}

// Example 6: TypeError
try {
  let num = 123;
  num.toUpperCase(); // Numbers do not have toUpperCase method
} catch (err) {
  console.log("Type Error caught: " + err.name);
}

// Example 7: URIError
try {
  decodeURI("%%%"); // Invalid URI component
} catch (err) {
  console.log("URI Error caught: " + err.name);
}
