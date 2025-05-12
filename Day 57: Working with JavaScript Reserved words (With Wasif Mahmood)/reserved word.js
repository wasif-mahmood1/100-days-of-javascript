// Day 57 of JavaScript: Reserved Words

// 🚫 JavaScript Reserved Words (ES5 & ES6)
// These cannot be used as variable, function, or label names

// --- Control Flow ---
/*
  break, case, catch, continue, debugger, default, do, else, finally,
  for, if, return, switch, throw, try, while, with
*/
function controlFlowDemo(x) {
  switch (x) {
    case 1:
      return "One";
    default:
      return "Unknown";
  }
}

// --- Declarations & Scoping ---
/*
  const*, let*, var, function, class*, enum*, export*, import*, extends*, super*
*/
const myConst = 42;
let myLet = "Scoped variable";
var myVar = "Old declaration";
function myFunc() {
  return "Function declared";
}

// class, extends, super – OOP
class Animal {
  speak() {
    return "Generic sound";
  }
}
class Dog extends Animal {
  speak() {
    return super.speak() + " Bark!";
  }
}

// --- Exception Handling ---
/*
  try, catch, throw, finally
*/
function errorHandler() {
  try {
    throw "Error!";
  } catch (e) {
    console.log("Caught error:", e);
  } finally {
    console.log("Cleanup done.");
  }
}

// --- Boolean & Null Literals ---
/*
  true, false, null
*/
const isAvailable = true;
const isEmpty = null;

// --- Operators & Type Checks ---
/*
  typeof, instanceof, delete, in, new, this, void
*/
function operatorDemo() {
  const obj = { name: "JS" };
  console.log("name" in obj); // true
  console.log(typeof obj); // "object"
  console.log(obj instanceof Object); // true
}

// --- Async Programming ---
/*
  await*, async (contextually), yield* (generators)
*/
async function fetchData() {
  return await Promise.resolve("Data");
}
function* generatorFunc() {
  yield "Step 1";
}

// --- Reserved for Future Use / Removed Keywords ---
/*
  abstract, boolean, byte, char, double, final, float, goto,
  int, long, native, short, synchronized, throws, transient, volatile
*/

// These are not supported in ES6 but should be avoided
// let abstract = "Invalid"; ❌
// let float = 5.5; ❌

// --- Deprecated / Built-in Objects and Properties to Avoid Overriding ---
/*
  Array, Date, eval, function, Math, Number, Object, String, NaN, Infinity
*/
let Math = "Override"; // ❌ Bad practice

// --- Avoid using Java-related Names ---
/*
  java, JavaArray, JavaClass, JavaObject, JavaPackage
*/

// --- Avoid HTML/Window Object Names ---
/*
  alert, document, window, form, event, location, navigator, open, close, screen, prompt, setTimeout, setInterval
*/
let alert = "Overridden"; // ❌ Will break native alert function

// --- Avoid HTML Event Handlers ---
/*
  onclick, onload, onerror, onblur, onfocus, onkeydown, onsubmit, etc.
*/
let onclick = "Handler"; // ❌ Avoid naming conflicts

// ✔ Best Practices Summary
// -------------------------
/*
1. Never use reserved words as identifiers.
2. Avoid redefining built-in global objects (Array, Object, Math, etc.).
3. Avoid using browser object names (alert, document, window).
4. Avoid using HTML event handler names (onclick, onload).
5. Use modern keywords (let, const, class) responsibly.
6. Follow linting rules and use a linter (like ESLint) to catch reserved word usage.
*/

// 🧪 Example: Safe Variable Naming
const userName = "Alice"; // ✅ Good
const _internalId = 123;  // ✅ Allowed
const $apiToken = "xyz";  // ✅ Allowed but use with care

// ⛔ Bad Examples (Uncommenting these will throw errors)
// let if = "no";         // ❌
// const return = 5;      // ❌
// function delete() {}   // ❌

console.log("Day 57 complete: Reserved Words explained.");
