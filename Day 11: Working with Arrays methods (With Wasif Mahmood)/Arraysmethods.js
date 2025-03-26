// Day 11: Basic Array Methods in JavaScript

// 1. Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // Output: 4

// 2. Array toString()
console.log(fruits.toString()); // Output: Banana,Orange,Apple,Mango

// 3. Array at()
console.log(fruits.at(2)); // Output: Apple

// 4. Array join()
console.log(fruits.join(" * ")); // Output: Banana * Orange * Apple * Mango

// 5. Array pop()
fruits.pop();
console.log(fruits); // Output: ["Banana", "Orange", "Apple"]

// 6. Array push()
fruits.push("Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Kiwi"]

// 7. Array shift()
fruits.shift();
console.log(fruits); // Output: ["Orange", "Apple", "Kiwi"]

// 8. Array unshift()
fruits.unshift("Lemon");
console.log(fruits); // Output: ["Lemon", "Orange", "Apple", "Kiwi"]

// 9. Array delete() (leaves undefined)
delete fruits[1];
console.log(fruits); // Output: ["Lemon", undefined, "Apple", "Kiwi"]

// 10. Array concat()
const moreFruits = ["Pineapple", "Grapes"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Lemon", undefined, "Apple", "Kiwi", "Pineapple", "Grapes"]

// 11. Array copyWithin()
const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(2, 0, 2);
console.log(numbers); // Output: [1, 2, 1, 2, 5]

// 12. Array flat()
const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray.flat()); // Output: [1, 2, 3, 4, 5, 6]

// 13. Array splice()
fruits.splice(2, 0, "Strawberry", "Peach");
console.log(fruits); // Output: ["Lemon", undefined, "Strawberry", "Peach", "Apple", "Kiwi"]

// 14. Array toSpliced()
const newFruits = fruits.toSpliced(1, 2);
console.log(newFruits); // Output: ["Lemon", "Peach", "Apple", "Kiwi"]

// 15. Array slice()
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: [undefined, "Strawberry"]
