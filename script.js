// SpendWise - Week 5 JavaScript Foundation

// Collect user input
let budget = prompt("Enter your budget:");
let expenses = prompt("Enter your total expenses:");

// Convert input values from strings to numbers
budget = Number(budget);
expenses = Number(expenses);

// Calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Calculate remaining balance
let remainingBalance = calculateBalance(budget, expenses);

// Display results in the browser console
console.log("Budget: " + budget);
console.log("Expenses: " + expenses);
console.log("Remaining Balance: " + remainingBalance);
