// Day 79 - JavaScript Async / Await
// "async and await make promises easier to write"

// ===============================================
// Async Functions
// ===============================================

// The 'async' keyword before a function makes the function return a Promise
async function sayHello() {
  return "Hello";
}

// Same as:
// function sayHello() {
//   return Promise.resolve("Hello");
// }

sayHello().then(
  function(value) { myDisplayer("Async Function Result: " + value); },
  function(error) { myDisplayer("Error: " + error); }
);

// ===============================================
// Await Keyword
// ===============================================

// The 'await' keyword pauses the execution of the async function
// until the Promise is resolved

async function basicAwaitExample() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  let result = await myPromise;
  myDisplayer("Await Result: " + result);
}

basicAwaitExample();

// ===============================================
// Await with Timeout
// ===============================================

async function delayedMessage() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("I love You !! (after 3 seconds)");
    }, 3000);
  });

  let result = await myPromise;
  myDisplayer("Delayed Result: " + result);
}

delayedMessage();

// ===============================================
// Await with File Request (XMLHttpRequest)
// ===============================================

async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });

  let result = await myPromise;
  myDisplayer("File Result: " + result);
}

// Uncomment below to test file loading (requires mycar.html to exist)
// getFile();

// ===============================================
// Helper Display Function
// ===============================================

function myDisplayer(message) {
  if (typeof document !== "undefined") {
    let demo = document.getElementById("demo");
    if (demo) {
      demo.innerHTML += message + "<br>";
    } else {
      console.log(message);
    }
  } else {
    console.log(message);
  }
}

// ===============================================
// Browser Support
// async/await is supported in:
// Chrome 55+, Edge 15+, Firefox 52+, Safari 11+, Opera 42+
// ECMAScript 2017 Feature
// ===============================================
