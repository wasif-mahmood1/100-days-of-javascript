// Day 15: JavaScript BigInt

// JavaScript integers are only accurate up to 15 digits
let normalInt = 999999999999999;   // 999999999999999
let roundedInt = 9999999999999999; // 10000000000000000 (rounded due to precision loss)

// Creating BigInt values
let big1 = 9999999999999999n; // Using 'n' suffix
let big2 = BigInt(1234567890123456789012345); // Using BigInt constructor

// Checking type of BigInt
console.log(typeof big1); // "bigint"

// BigInt Operators
let bigX = 9007199254740995n;
let bigY = 9007199254740995n;
let bigProduct = bigX * bigY; // Multiplication

// Mixing BigInt and Number (Not Allowed)
// let invalidOperation = bigX + 10; // Error: Cannot mix BigInt and Number

// Correct way to mix BigInt with Number
let mixedOperation = Number(bigX) + 10; // Convert BigInt to Number before operations

// BigInt Division (Note: Rounds towards zero)
let bigDiv = 5n / 2n; // 2n (not 2.5 because BigInt cannot have decimals)

// BigInt in different bases
let hexBigInt = 0x20000000000003n; // Hexadecimal
let octBigInt = 0o400000000000000003n; // Octal
let binBigInt = 0b100000000000000000000000000000000000000000000000000011n; // Binary

// Precision Curiosity: Unsafe operations
console.log(9007199254740992 === 9007199254740993); // true! (Precision loss)

// Safe Integers
let maxSafe = Number.MAX_SAFE_INTEGER; // 9007199254740991
let minSafe = Number.MIN_SAFE_INTEGER; // -9007199254740991

// Checking if a number is an integer
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

// Checking if a number is a safe integer
console.log(Number.isSafeInteger(10)); // true
console.log(Number.isSafeInteger(12345678901234567890)); // false (too large)
