// Day 39: JavaScript Type Conversion

// ----- Converting Strings to Numbers -----
console.log(Number("3.14"));     // 3.14
console.log(Number(" "));        // 0
console.log(Number(""));         // 0
console.log(Number("John"));     // NaN

console.log(parseInt("10.9"));   // 10
console.log(parseFloat("10.9")); // 10.9

let str = "5";
let num = +str;
console.log(num);                // 5

let invalidStr = "hello";
let invalidNum = +invalidStr;
console.log(invalidNum);         // NaN

// ----- Converting Numbers to Strings -----
let x = 123;
console.log(String(x));          // "123"
console.log((123).toString());   // "123"
console.log((100 + 23).toString()); // "123"

console.log(x.toFixed(2));       // "123.00"
console.log(x.toExponential());  // "1.23e+2"
console.log(x.toPrecision(4));   // "123.0"

// ----- Converting Dates -----
let d = new Date();
console.log(Number(d));          // timestamp
console.log(d.getTime());        // timestamp
console.log(String(d));          // date string
console.log(d.toString());       // date string

// ----- Converting Booleans -----
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(String(true));       // "true"
console.log(false.toString());   // "false"

// ----- Automatic Type Conversion Examples -----
console.log(5 + null);           // 5
console.log("5" + null);         // "5null"
console.log("5" + 2);            // "52"
console.log("5" - 2);            // 3
console.log("5" * "2");          // 10

// ----- Automatic String Conversion -----
let obj = { name: "John" };
console.log(obj.toString());     // "[object Object]"

let arr = [1, 2, 3, 4];
console.log(arr.toString());     // "1,2,3,4"

let date = new Date();
console.log(date.toString());    // readable date string

let myVar1 = 123;
let myVar2 = true;
let myVar3 = false;
console.log(myVar1.toString());  // "123"
console.log(myVar2.toString());  // "true"
console.log(myVar3.toString());  // "false"

// ----- Type Conversion Table Examples -----
console.log(Boolean("0"));       // true
console.log(Boolean(""));        // false
console.log(Boolean([]));        // true
console.log(Number([20]));       // 20
console.log(String([10, 20]));   // "10,20"
console.log(Number(["ten", "twenty"])); // NaN
console.log(String({}));         // "[object Object]"
console.log(Number(null));       // 0
console.log(String(undefined));  // "undefined"
console.log(Boolean(undefined)); // false
