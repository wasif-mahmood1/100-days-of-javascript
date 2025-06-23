// Day 88: Working with JSON and a JSON Server in JavaScript

// --- 1. Sending JavaScript Object as JSON to a Server (Basic Example) ---
const myDataToSend = {
  name: "John",
  age: 31,
  city: "New York"
};

const jsonToSend = JSON.stringify(myDataToSend);
console.log("Sending JSON data:", jsonToSend);

// (Simulation) Sending to a server using window.location (usually not ideal for APIs)
// window.location = "demo_json.php?x=" + jsonToSend;

// --- 2. Receiving JSON String and Parsing to JavaScript Object ---
const receivedJson = '{"name":"John", "age":31, "city":"New York"}';
const parsedObject = JSON.parse(receivedJson);
console.log("Received JSON parsed to object:", parsedObject);
console.log("Accessing property:", parsedObject.name);

// --- 3. Fetching JSON Data from a Server using XMLHttpRequest ---
function fetchJsonFromServer() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const serverObj = JSON.parse(this.responseText);
    console.log("Data from json_demo.txt:", serverObj);
    document.getElementById("demo1").innerText = serverObj.name;
  };
  xmlhttp.open("GET", "json_demo.txt", true);
  xmlhttp.send();
}

// --- 4. Fetching Array as JSON from Server ---
function fetchJsonArrayFromServer() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const serverArr = JSON.parse(this.responseText);
    console.log("Data from json_demo_array.txt:", serverArr);
    document.getElementById("demo2").innerText = serverArr[0];
  };
  xmlhttp.open("GET", "json_demo_array.txt", true);
  xmlhttp.send();
}

// Call the functions when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  fetchJsonFromServer();
  fetchJsonArrayFromServer();
});

// --- HTML Mockup (to include in HTML file for testing) ---
// <div id="demo1">Loading object...</div>
// <div id="demo2">Loading array...</div>
