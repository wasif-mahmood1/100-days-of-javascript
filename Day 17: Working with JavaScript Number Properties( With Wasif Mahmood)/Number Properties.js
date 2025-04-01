// Day 17: JavaScript Number Properties

// Number.EPSILON - Smallest difference between 1 and a number greater than 1
console.log("Number.EPSILON:", Number.EPSILON);

// Number.MAX_VALUE - Largest possible number in JavaScript
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);

// Number.MIN_VALUE - Smallest possible number in JavaScript
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);

// Number.MAX_SAFE_INTEGER - Maximum safe integer (2^53 - 1)
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);

// Number.MIN_SAFE_INTEGER - Minimum safe integer -(2^53 - 1)
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);

// Number.POSITIVE_INFINITY - Represents infinity
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Example of POSITIVE_INFINITY:", 1 / 0);

// Number.NEGATIVE_INFINITY - Represents negative infinity
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Example of NEGATIVE_INFINITY:", -1 / 0);

// Number.NaN - Represents Not-a-Number
console.log("Number.NaN:", Number.NaN);
console.log("Example of NaN:", 100 / "Apple");

// Attempting to access number properties on variables results in undefined
let x = 6;
console.log("x.MAX_VALUE (incorrect usage):", x.MAX_VALUE); // Undefined
