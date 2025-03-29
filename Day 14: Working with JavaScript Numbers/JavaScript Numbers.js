// Day 14: JavaScript Numbers

// JavaScript has only one type of number, stored as 64-bit floating point
let x = 3.14;  // A number with decimals
let y = 3;     // A number without decimals

// Scientific notation
let a = 123e5;  // 12300000
let b = 123e-5; // 0.00123

// Integer precision (accurate up to 15 digits)
let bigNumber = 999999999999999;   // 999999999999999
let biggerNumber = 9999999999999999; // 10000000000000000

// Floating point arithmetic issue
let sum = 0.2 + 0.1;  // 0.30000000000000004
let correctedSum = (0.2 * 10 + 0.1 * 10) / 10;  // 0.3

// Addition with numbers and strings
let num1 = 10;
let num2 = "20";
let result = num1 + num2; // "1020" (concatenation, not addition)

// Numeric operations on strings
let divide = "100" / "10"; // 10
let multiply = "100" * "10"; // 1000
let subtract = "100" - "10"; // 90
let add = "100" + "10"; // "10010" (concatenation)

// NaN (Not a Number)
let invalidOperation = 100 / "Apple"; // NaN
let checkNaN = isNaN(invalidOperation); // true

// Checking for NaN using Number.isNaN()
let checkNaN2 = Number.isNaN(invalidOperation); // true

// Infinity
let inf = 2 / 0; // Infinity
let negInf = -2 / 0; // -Infinity

// Hexadecimal Numbers
let hex = 0xFF; // 255

// Octal and Binary Numbers (ES6+)
let octal = 0o77; // 63
let binary = 0b1010; // 10

// Number conversions using toString()
let num = 32;
let base2 = num.toString(2); // "100000"
let base8 = num.toString(8); // "40"
let base16 = num.toString(16); // "20"

// Number parsing
let parsedInt = parseInt("100.99"); // 100
let parsedFloat = parseFloat("100.99"); // 100.99

// Checking if a value is a number
let isNum = !isNaN("100"); // true
let isNum2 = !isNaN("Hello"); // false

// Avoid using Number objects
let primitiveNum = 500;
let objectNum = new Number(500);
let isEqual = primitiveNum == objectNum; // true
let isStrictEqual = primitiveNum === objectNum; // false

// Comparing two Number objects
let numObj1 = new Number(500);
let numObj2 = new Number(500);
let areObjectsEqual = numObj1 === numObj2; // false (different objects)

// Checking if a value is finite
let isFiniteNum = Number.isFinite(10); // true
let isFiniteInf = Number.isFinite(Infinity); // false

// Checking if a value is an integer
let isInteger = Number.isInteger(10.5); // false
let isInteger2 = Number.isInteger(10); // true
