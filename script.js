// SpendWise - Interactive Budget Application

// Store expense records in an array
let expenses = [];

// Set the user's budget
let budget = 0;

// Select HTML elements using their IDs
const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseCategory = document.getElementById("expense-category");
const expenseAmount = document.getElementById("expense-amount");

const budgetDisplay = document.getElementById("budget");
const totalExpensesDisplay = document.getElementById("total-expenses");
const balanceDisplay = document.getElementById("balance");
const statusDisplay = document.getElementById("status");
const expenseList = document.getElementById("expense-list");

// Ask the user for their budget
const enteredBudget = prompt("Enter your monthly budget in KSh:");

budget = Number(enteredBudget);

// Make sure the budget is a valid number
if (isNaN(budget) || budget <= 0) {
    budget = 10000;
    alert("Invalid budget. A default budget of KSh 10,000 has been set.");
}

// Display the budget
budgetDisplay.textContent = `KSh ${budget.toLocaleString()}`;

// Handle the expense form submission
expenseForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    const name = expenseName.value.trim();
    const category = expenseCategory.value;
    const amount = Number(expenseAmount.value);

    // Validate the expense amount
    if (name === "" || category === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name, category, and amount.");
        return;
    }

    // Create a new expense record
    const newExpense = {
        name: name,
        category: category,
        amount: amount
    };

    // Add the expense to the array
    expenses.push(newExpense);

    // Update the dashboard
    updateDashboard();

    // Clear the form
    expenseForm.reset();
});


// Function to update the dashboard
function updateDashboard() {

    // Calculate total expenses using a loop
    let totalExpenses = 0;

    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    // Calculate remaining balance
    const balance = budget - totalExpenses;

    // Update dashboard values
    totalExpensesDisplay.textContent =
        `KSh ${totalExpenses.toLocaleString()}`;

    balanceDisplay.textContent =
        `KSh ${balance.toLocaleString()}`;

    // Decision making using conditionals
    if (balance < 0) {

        statusDisplay.textContent =
            "⚠️ You have exceeded your budget!";

    } else if (balance <= budget * 0.20) {

        statusDisplay.textContent =
            "⚠️ You are close to your budget limit.";

    } else {

        statusDisplay.textContent =
            "✅ You are within your budget. Good job!";
    }

    // Display all expense records
    displayExpenses();
}


// Function to display expenses on the webpage
function displayExpenses() {

    // Clear the current list
    expenseList.innerHTML = "";

    // Check if there are no expenses
    if (expenses.length === 0) {

        expenseList.innerHTML =
            "<p>No expenses added yet.</p>";

        return;
    }

    // Loop through the array
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];

        // Create a new HTML element
        const expenseItem = document.createElement("div");

        expenseItem.classList.add("expense-item");

        expenseItem.innerHTML = `
            <div>
                <strong>${expense.name}</strong>
                <span>${expense.category}</span>
            </div>

            <strong>KSh ${expense.amount.toLocaleString()}</strong>
        `;

        // Add the expense to the webpage
        expenseList.appendChild(expenseItem);
    }
}


// Display the dashboard when the page loads
updateDashboard();
