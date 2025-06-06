// Day 78 - JavaScript Promises
// "I Promise a Result!"

// ===============================================
// Promise Basics
// ===============================================

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Producing code may take time, while consuming code must wait for the result.

function myDisplayer(value) {
  console.log("Result:", value);
}

// Basic Promise Syntax
let basicPromise = new Promise(function(myResolve, myReject) {
  // Producing Code (may take time)
  let success = true;

  if (success) {
    myResolve("Promise fulfilled!");
  } else {
    myReject("Promise rejected!");
  }
});

// Consuming Code (must wait)
basicPromise.then(
  function(value) { myDisplayer(value); },
  function(error) { myDisplayer(error); }
);

// ===============================================
// Promise States and Results
// ===============================================
// A Promise can be: Pending, Fulfilled, or Rejected
// State and result are internal and cannot be accessed directly

// ===============================================
// Promise Example with Conditional Logic
// ===============================================

let conditionalPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

  if (x === 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

conditionalPromise.then(
  function(value) { myDisplayer(value); },
  function(error) { myDisplayer(error); }
);

// ===============================================
// Timeout Example with setTimeout
// ===============================================

let timeoutPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

timeoutPromise.then(function(value) {
  myDisplayer(value);
});

// ===============================================
// XMLHttpRequest Example (Simulating File Load)
// ===============================================

function loadFileUsingCallback(callback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status === 200) {
      callback(req.responseText);
    } else {
      callback("Error: " + req.status);
    }
  };
  req.send();
}

// Uncomment to use callback version
// loadFileUsingCallback(myDisplayer);

let filePromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status === 200) {
      myResolve(req.responseText);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

filePromise.then(
  function(value) { myDisplayer(value); },
  function(error) { myDisplayer(error); }
);

// ===============================================
// Browser Support
// ECMAScript 2015 (ES6) introduced Promise
// Supported from Chrome 33, Edge 12, Firefox 29, Safari 7.1, Opera 20
// ===============================================
