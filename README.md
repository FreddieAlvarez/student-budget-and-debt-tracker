# student-budget-and-debt-tracker

# Basic Unit tests
Used Jest to test the core budget functions of calculateBudget, getBudgetSummary, addIncome, and addExpense.

All tests were ran with the command npm test.

Its a simple Node.js application that tracks income, expenses, and calculates the overall budget. This is an MVP for managing basic financial data.

## Deployed URL
[View Live Application](https://student-budget-and-debt-tracker.onrender.com/)

## Project Description
This application allows you to:

- Set initial income and expenses
- Add income and expenses in the program
- View a summary of your budget in a web browser including things like income expenses and balance.

Uses Node.js with Express.

## Features
- Core functions: `setData()`, `addIncome()`, `addExpense()`, `getBudgetSummary()`
- Budget summary displayed at the root endpoint (`/`)
- Unit tests with Jest and Supertest
- CI/CD pipeline with GitHub Actions for testing and deployment

## Setup Instructions
1. Clone the repository:

```bash
git clone https://github.com/FreddieAlvarez/student-budget-and-debt-tracker.git
cd student-budget-and-debt-tracker

## Install dependencies:
npm install

## Start the application locally:
npm start

## Open browser at:
http://localhost:3000

## Usage Example
After starting the app, you will see:

Budget Summary
Income: $5500
Expenses: $2100
Budget: $3400

All income and expenses are in app.js right now:

setData(initialIncome, initialExpenses);
addIncome(amount);
addExpense(amount);

## Basic Unit Tests:
Run Jest tests for core functions with:
npm test

## System Architecture:
- Node.js backend using CommonJS modules
- Express server serving HTTP requests
- Core functions separated into data.js and budget.js for modularity
- Budget summary served at / and /budget
- routes in routes/budget.js
- automated testing and deployment through github

## Design Patterns:
- Module Pattern - data.js and budget.js handle specific tasks so its easier to manage
- Model-View-Controller - seperates data, routes, and html to keep organized well

## Troubleshooting:
- If it won't start - use npm install to install dependencies and node.js is the right version
- Failed tests - reset data and make sure Jest is installed
- changes not showing up in browser - restart after you updated the code
- Struggling with deployment - Make sure you got your Render API key and service ID in GitHub serup right

## Known Limitations:
- No user input as of right now because all values are hardcoded
- Restarting server resets budget
- Limited error handling for static data

## Future Enhancements:
- Add dynamic user input forms
- save information so it doesn't go away
- Implement error handling
- Add user authentication

