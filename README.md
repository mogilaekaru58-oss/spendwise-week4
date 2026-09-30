# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a budget tracking web application that helps users manage their budget and expenses. JavaScript was added to the existing SpendWise interface to collect data, perform calculations, and display results in the browser console.

## JavaScript Concepts Implemented

The project demonstrates variables, data types, user input, number conversion, arithmetic calculations, functions, return values, and console output.

## How Variables Are Used

Variables store budget and expense information.

Example:

let budget = prompt("Enter your budget:");
let expenses = prompt("Enter your total expenses:");

The application also stores values entered by the user.

## How User Input Is Collected

The application uses prompt() to collect the user's budget and expenses.

Example:

let userBudget = prompt("Enter your budget:");
let userExpenses = prompt("Enter your total expenses:");

The input is converted from strings to numbers using Number().

## How Calculations Are Performed

SpendWise calculates the remaining balance by subtracting expenses from the budget.

Example:

40000 - 12000 = 28000

## How Functions Organize the Code

The calculateBalance() function performs the budget calculation and returns the remaining balance.

Example:

function calculateBalance(budget, expenses) {
    return budget - expenses;
}

This makes the calculation reusable with different values.

## Displaying Results

The application displays the budget, expenses, and remaining balance in the browser console using console.log().

## Project Files

- index.html - Webpage structure
- style.css - Webpage styling
- script.js - JavaScript logic and calculations
- README.md - Project documentation
