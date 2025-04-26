// Day 41: JavaScript Bitwise Operations

// ===============================
// Bitwise Operators Overview
// ===============================
// &  AND       -> Sets each bit to 1 if both bits are 1
// |  OR        -> Sets each bit to 1 if at least one bit is 1
// ^  XOR       -> Sets each bit to 1 if the bits are different
// ~  NOT       -> Inverts all bits
// << Left Shift  -> Shifts bits left, filling 0s on the right
// >> Right Shift -> Shifts bits right, keeping sign
// >>> Zero Fill Right Shift -> Shifts right, filling 0s on the left

console.log("Bitwise Operations Examples:");
console.log("5 & 1 =", 5 & 1);        // 1
console.log("5 | 1 =", 5 | 1);        // 5
console.log("5 ^ 1 =", 5 ^ 1);        // 4
console.log("~5 =", ~5);              // -6 (not 10 due to 32-bit signed integer representation)
console.log("5 << 1 =", 5 << 1);      // 10
console.log("5 >> 1 =", 5 >> 1);      // 2
console.log("5 >>> 1 =", 5 >>> 1);    // 2

// JavaScript uses 32-bit signed integers for bitwise operations
// So ~5 is actually ~00000000000000000000000000000101 => 11111111111111111111111111111010 => -6

// Bitwise AND Table
console.log("\nBitwise AND Examples:");
console.log("0 & 0 =", 0 & 0); // 0
console.log("1 & 1 =", 1 & 1); // 1
console.log("1111 & 0100 =", (0b1111 & 0b0100).toString(2)); // 0100

// Bitwise OR Table
console.log("\nBitwise OR Examples:");
console.log("0 | 1 =", 0 | 1); // 1
console.log("1111 | 0010 =", (0b1111 | 0b0010).toString(2)); // 1111

// Bitwise XOR Table
console.log("\nBitwise XOR Examples:");
console.log("1 ^ 0 =", 1 ^ 0); // 1
console.log("1111 ^ 0010 =", (0b1111 ^ 0b0010).toString(2)); // 1101

// Bitwise NOT
console.log("\nBitwise NOT:");
console.log("~5 =", ~5); // -6

// Bitwise Left Shift
console.log("\nBitwise Left Shift:");
console.log("5 << 1 =", 5 << 1); // 10

// Bitwise Right Shift
console.log("\nBitwise Right Shift:");
console.log("-5 >> 1 =", -5 >> 1); // -3

// Zero Fill Right Shift
console.log("\nZero Fill Right Shift:");
console.log("5 >>> 1 =", 5 >>> 1); // 2

// Binary Representation Examples
console.log("\nBinary Patterns:");
const binaryExamples = [1, 2, 4, 8, 16, 32, 64, 5, 13, 45];
binaryExamples.forEach(num => {
  console.log(`${num} =`, dec2bin(num));
});

// Two's Complement Negative Examples
console.log("\nTwo's Complement Examples:");
const negatives = [5, 6, 40];
negatives.forEach(n => {
  const negative = ~n + 1;
  console.log(`~${n} + 1 =`, negative, "(Binary:", dec2bin(negative) + ")");
});

// Joke for binary lovers
console.log("\nJoke:");
console.log("There are only 10 types of people in the world: those who understand binary and those who don't.");

// Helper: Convert Decimal to Binary
function dec2bin(dec) {
  return (dec >>> 0).toString(2).padStart(32, '0');
}

// Helper: Convert Binary to Decimal
function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}

// Test conversions
console.log("\nConversions:");
console.log("Decimal 25 to Binary:", dec2bin(25));
console.log("Binary 11001 to Decimal:", bin2dec("11001"));
