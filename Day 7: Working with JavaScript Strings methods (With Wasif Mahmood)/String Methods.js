// JavaScript String Methods (Day 7)

let text = "Wasif, Rawalpindi, 25";

// 1. String Length
console.log(text.length); // Output: 21

// 2. charAt()
console.log(text.charAt(0)); // Output: W

// 3. charCodeAt()
console.log(text.charCodeAt(0)); // Output: 87 (Unicode of 'W')

// 4. at()
console.log(text.at(-1)); // Output: 5 (Last character)

// 5. Property Access []
console.log(text[7]); // Output: R (8th character, index starts from 0)

// 6. slice()
console.log(text.slice(7, 17)); // Output: Rawalpindi

// 7. substring()
console.log(text.substring(7, 17)); // Output: Rawalpindi

// 8. substr() (Deprecated)
console.log(text.substr(7, 10)); // Output: Rawalpindi

// 9. toUpperCase()
console.log(text.toUpperCase()); // Output: WASIF, RAWALPINDI, 25

// 10. toLowerCase()
console.log(text.toLowerCase()); // Output: wasif, rawalpindi, 25

// 11. concat()
console.log(text.concat(" is learning JavaScript!")); // Output: Wasif, Rawalpindi, 25 is learning JavaScript!

// 12. trim()
console.log("   Wasif  ".trim()); // Output: Wasif

// 13. trimStart()
console.log("   Wasif  ".trimStart()); // Output: "Wasif  "

// 14. trimEnd()
console.log("   Wasif  ".trimEnd()); // Output: "   Wasif"

// 15. padStart()
console.log("25".padStart(5, "0")); // Output: 00025

// 16. padEnd()
console.log("25".padEnd(5, "0")); // Output: 25000

// 17. repeat()
console.log("JS ".repeat(3)); // Output: JS JS JS 

// 18. replace()
console.log(text.replace("Wasif", "Aqib")); // Output: Aqib, Rawalpindi, 25

// 19. replaceAll()
console.log(text.replaceAll("i", "I")); // Output: WasIf, RawalpIndI, 25

// 20. split()
console.log(text.split(", ")); // Output: ["Wasif", "Rawalpindi", "25"]
