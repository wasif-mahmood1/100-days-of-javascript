// Day 36: JavaScript Map Methods

// 1. Creating a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log("Initial Map:", fruits);

// 2. get()
console.log("Get apples:", fruits.get("apples")); // 500

// 3. set()
fruits.set("kiwi", 150); // Add new
fruits.set("apples", 450); // Update existing
console.log("Updated Map:", fruits);

// 4. size
console.log("Map size:", fruits.size); // 4

// 5. delete()
fruits.delete("bananas");
console.log("After deleting bananas:", fruits);

// 6. has()
console.log("Has oranges?", fruits.has("oranges")); // true
console.log("Has bananas?", fruits.has("bananas")); // false

// 7. forEach()
console.log("Looping with forEach:");
fruits.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// 8. entries()
console.log("Using entries():");
for (const [key, value] of fruits.entries()) {
  console.log(key, value);
}

// 9. keys()
console.log("Using keys():");
for (const key of fruits.keys()) {
  console.log(key);
}

// 10. values()
console.log("Using values():");
for (const value of fruits.values()) {
  console.log(value);
}

// 11. Sum values
let total = 0;
for (const value of fruits.values()) {
  total += value;
}
console.log("Total quantity:", total);

// 12. Objects as keys
const appleObj = { name: "Apple" };
const bananaObj = { name: "Banana" };
const objMap = new Map();

objMap.set(appleObj, 500);
objMap.set(bananaObj, 300);

console.log("Object key map:", objMap);
console.log("Get by object key:", objMap.get(appleObj)); // 500
console.log("Get by string (fails):", objMap.get("Apple")); // undefined

// 13. Map.groupBy() — ES2024 feature
const fruitsArr = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

function groupByQuantity({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

const grouped = Map.groupBy(fruitsArr, groupByQuantity);
console.log("Grouped Map using Map.groupBy():", grouped);

// Optional: View grouped results
for (const [group, items] of grouped.entries()) {
  console.log(group, items);
}
