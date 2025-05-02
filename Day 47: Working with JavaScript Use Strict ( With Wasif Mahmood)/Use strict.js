//Day 45: Working with Use strict function 
// "use strict"; - Declaring strict mode for the entire script
"use strict";

// Example 1: Using undeclared variables (This will cause an error)
try {
  x = 3.14;  // Error: 'x' is not declared
} catch (e) {
  console.error(e.message);  // Output: x is not defined
}

// Example 2: Function with strict mode applied locally
function myFunction() {
  "use strict";  // Strict mode inside this function only

  try {
    y = 3.14;  // Error: 'y' is not declared
  } catch (e) {
    console.error(e.message);  // Output: y is not defined
  }
}
myFunction();

// Example 3: Deleting a variable (This will cause an error)
try {
  let x = 3.14;
  delete x;  // Error: 'x' can't be deleted
} catch (e) {
  console.error(e.message);  // Output: Cannot delete property 'x' of #<Object>
}

// Example 4: Duplicate parameter names (This will cause an error)
try {
  function x(p1, p1) { }  // Error: Duplicate parameter name not allowed
} catch (e) {
  console.error(e.message);  // Output: Duplicate parameter name not allowed in function
}

// Example 5: Octal numeric literals (This will cause an error)
try {
  let x = 010;  // Error: Octal literals are not allowed in strict mode
} catch (e) {
  console.error(e.message);  // Output: Octal literals are not allowed in strict mode
}

// Example 6: Using 'eval' as a variable name (This will cause an error)
try {
  let eval = 3.14;  // Error: 'eval' is a restricted keyword in strict mode
} catch (e) {
  console.error(e.message);  // Output: Unexpected eval or arguments in strict mode
}

// Example 7: Writing to a read-only property (This will cause an error)
const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });

try {
  obj.x = 3.14;  // Error: Cannot assign to read-only property 'x'
} catch (e) {
  console.error(e.message);  // Output: Cannot assign to read-only property 'x'
}

// Example 8: Using 'with' statement (This will cause an error)
try {
  with (Math) {  // Error: 'with' is not allowed in strict mode
    x = cos(2);
  }
} catch (e) {
  console.error(e.message);  // Output: Strict mode code may not include a with statement
}

// Example 9: `this` behavior in strict mode
function testThis() {
  console.log(this);  // In strict mode, 'this' will be undefined
}

testThis();  // Output: undefined

// Example 10: Reserved keywords in strict mode (This will cause an error)
try {
  let public = 1500;  // Error: 'public' is a reserved keyword
} catch (e) {
  console.error(e.message);  // Output: Unexpected token 'public'
}

