// Day 45: JavaScript Scope

// --- BLOCK SCOPE ---

// let and const are block-scoped
{
  let blockLet = "I am block scoped (let)";
  const blockConst = "I am block scoped (const)";
  console.log(blockLet);   // Works
  console.log(blockConst); // Works
}
// console.log(blockLet);    // Error: blockLet is not defined
// console.log(blockConst);  // Error: blockConst is not defined

// var is NOT block-scoped
{
  var blockVar = "I am NOT block scoped (var)";
}
console.log(blockVar); // Outputs: I am NOT block scoped (var)


// --- FUNCTION SCOPE ---

function myFunctionScope() {
  var funcVar = "Function scope with var";
  let funcLet = "Function scope with let";
  const funcConst = "Function scope with const";

  console.log(funcVar);   // Works
  console.log(funcLet);   // Works
  console.log(funcConst); // Works
}

myFunctionScope();
// console.log(funcVar);   // Error: funcVar is not defined
// console.log(funcLet);   // Error: funcLet is not defined
// console.log(funcConst); // Error: funcConst is not defined


// --- GLOBAL SCOPE ---

let globalLet = "Global scope with let";
var globalVar = "Global scope with var";
const globalConst = "Global scope with const";

function accessGlobal() {
  console.log(globalLet);   // Accessible
  console.log(globalVar);   // Accessible
  console.log(globalConst); // Accessible
}

accessGlobal();

// 'var' global becomes part of window object in browser
console.log(window.globalVar);   // In browser: works
console.log(window.globalLet);   // undefined in browser
console.log(window.globalConst); // undefined in browser


// --- AUTOMATIC GLOBAL (NOT RECOMMENDED) ---

function autoGlobal() {
  undeclaredVar = "I am implicitly global!";
}
autoGlobal();
console.log(undeclaredVar); // Works, but bad practice

// Use strict mode to avoid this:
"use strict";
// oopsVar = "This will throw an error in strict mode"; // ReferenceError


// --- FUNCTION ARGUMENTS ARE LOCAL ---

function greet(name) {
  console.log("Hello, " + name); // name is local
}
greet("Alice");
// console.log(name); // Error: name is not defined


// --- EXERCISE ---

let x = 5;
{
  let x = 3;
}
alert("What is the value of x? " + x); // Outputs: 5
