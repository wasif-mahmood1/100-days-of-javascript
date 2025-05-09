// Day 54: JavaScript Debugging Practice

// Function to calculate the total price after tax
function calculateTotal(price, taxRate) {
    console.log("Price before tax:", price);
    console.log("Tax rate:", taxRate);

    let tax = price * taxRate;
    let total = price + tax;

    console.log("Tax amount:", tax);
    console.log("Total price:", total);

    return total;
}

// Intentionally introduced error: misspelled variable
let basePrice = 100;
let taxPercent = 0.15;

// Debugging starts here
debugger;

// Should return 115
let finalAmount = calculateTotal(basePrice, taxPrcnt); // Bug: taxPrcnt is undefined

console.log("Final amount:", finalAmount);

// DOM manipulation to display result (in case HTML is present)
document.addEventListener("DOMContentLoaded", function () {
    const resultEl = document.getElementById("result");
    if (resultEl) {
        resultEl.textContent = `Final amount to pay: $${finalAmount}`;
    }
});
