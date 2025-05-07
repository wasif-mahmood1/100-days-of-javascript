// Day 48: JavaScript Arrow Functions

// ✅ Arrow Function Syntax Example
let myFunction = (a, b) => a * b;
console.log("Arrow Function Result (3 * 4):", myFunction(3, 4));

// ✅ Before and After Arrow Functions
let helloOld = function () {
  return "Hello World!";
};

let helloNew = () => {
  return "Hello World!";
};

let helloShort = () => "Hello World!";

console.log("Traditional Function:", helloOld());
console.log("Arrow Function with return:", helloNew());
console.log("Arrow Function (short):", helloShort());

// ✅ Arrow Function With Parameters
const greet = (val) => "Hello " + val;
console.log(greet("John"));

// ✅ Arrow Function Without Parentheses (1 param)
const greetOne = val => "Hello " + val;
console.log(greetOne("Alice"));

// ✅ Arrow Function and `this` (Regular vs Arrow)

// HTML simulation (for console-based demonstration)
const demo = {
  content: '',
  append: function (text) {
    this.content += text + '\n';
  }
};

// Regular Function Example
function regularHello() {
  demo.append("Regular Function this: " + this);
}

// Arrow Function Example
const arrowHello = () => {
  demo.append("Arrow Function this: " + this);
};

// Simulate global object context
globalThis.demo = demo;
globalThis.regularHello = regularHello;
globalThis.arrowHello = arrowHello;

// Simulate event listeners (window and button context)
console.log("----- Regular Function -----");
regularHello(); // this -> globalThis
regularHello.call({ name: "Button" }); // this -> { name: "Button" }

console.log("----- Arrow Function -----");
arrowHello(); // this -> lexical scope (globalThis in this case)
arrowHello.call({ name: "Button" }); // still -> globalThis

// Print simulated HTML output
console.log("\n--- Simulated Demo Output ---");
console.log(demo.content);

// ✅ Summary (as console comments)
/*
Summary:
- Arrow functions provide a shorter syntax.
- They do NOT bind their own 'this'.
- Arrow functions are ideal for:
  - Callbacks (e.g., map, filter)
  - Methods that don’t require 'this'
  - Keeping lexical 'this' context
*/
