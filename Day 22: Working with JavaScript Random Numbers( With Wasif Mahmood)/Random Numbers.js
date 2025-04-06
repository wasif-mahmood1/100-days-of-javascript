// Day 22: JavaScript Random Numbers

// Math.random() returns a random number from 0 (inclusive) up to but not including 1
console.log("Random number between 0 and 1:", Math.random());

// Random integer from 0 to 9
console.log("Random integer from 0 to 9:", Math.floor(Math.random() * 10));

// Random integer from 0 to 10
console.log("Random integer from 0 to 10:", Math.floor(Math.random() * 11));

// Random integer from 0 to 99
console.log("Random integer from 0 to 99:", Math.floor(Math.random() * 100));

// Random integer from 0 to 100
console.log("Random integer from 0 to 100:", Math.floor(Math.random() * 101));

// Random integer from 1 to 10
console.log("Random integer from 1 to 10:", Math.floor(Math.random() * 10) + 1);

// Random integer from 1 to 100
console.log("Random integer from 1 to 100:", Math.floor(Math.random() * 100) + 1);

// A function to return random integer between min (included) and max (excluded)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log("Random integer between 5 and 15 (exclusive):", getRndInteger(5, 15));

// A function to return random integer between min and max (both included)
function getRndIntegerInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random integer between 5 and 15 (inclusive):", getRndIntegerInclusive(5, 15));
