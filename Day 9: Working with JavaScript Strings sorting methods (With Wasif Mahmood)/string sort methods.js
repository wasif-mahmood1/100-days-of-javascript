// Sorting an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Reversing an array
fruits.reverse();
console.log(fruits); // Output: ["Orange", "Mango", "Banana", "Apple"]

// Using toSorted() to sort without modifying the original array
const months = ["Jan", "Feb", "Mar", "Apr"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // Output: ["Apr", "Feb", "Jan", "Mar"]
console.log(months); // Output: ["Jan", "Feb", "Mar", "Apr"] (original remains unchanged)

// Using toReversed() to reverse without modifying the original array
const reversedMonths = months.toReversed();
console.log(reversedMonths); // Output: ["Apr", "Mar", "Feb", "Jan"]
console.log(months); // Output: ["Jan", "Feb", "Mar", "Apr"] (original remains unchanged)

// Numeric Sorting
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // Output: [1, 5, 10, 25, 40, 100]

// Numeric Sorting in Descending Order
points.sort((a, b) => b - a);
console.log(points); // Output: [100, 40, 25, 10, 5, 1]

// Sorting in Random Order
points.sort(() => 0.5 - Math.random());
console.log(points); // Output: Randomized order

// Fisher-Yates Shuffle (Better Randomization)
for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [points[i], points[j]] = [points[j], points[i]];
}
console.log(points); // Output: Randomized order

// Finding Min and Max using Math.min() and Math.max()
console.log(Math.min(...points)); // Output: Minimum value in points
console.log(Math.max(...points)); // Output: Maximum value in points

// Custom function to find Min
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
console.log(myArrayMin(points)); // Output: Minimum value in points

// Custom function to find Max
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(myArrayMax(points)); // Output: Maximum value in points

// Sorting an array of objects by year
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];
cars.sort((a, b) => a.year - b.year);
console.log(cars); 
// Output: [{ type: "Saab", year: 2001 }, { type: "BMW", year: 2010 }, { type: "Volvo", year: 2016 }]

// Sorting an array of objects by string property
cars.sort((a, b) => a.type.localeCompare(b.type));
console.log(cars); 
// Output: [{ type: "BMW", year: 2010 }, { type: "Saab", year: 2001 }, { type: "Volvo", year: 2016 }]
