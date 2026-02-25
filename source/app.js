//interface
//data layer and business logic modules
const express = require('express');
const { setData, addIncome, addExpense } = require('./data');
const { getBudgetSummary } = require('./budget');

//express application and port
const app = express();
const PORT = process.env.PORT || 3000;

// Enable JSON parsing
app.use(express.json());

//set initial income and expenses values
setData(5000, 2000);

//Add income and expenses
addIncome(500);
addExpense(100);

//Endpoint to get budget summary
app.get('/', (req, res) => {
  const summary = getBudgetSummary();
  res.send(`
    <h1>Budget Summary</h1>
    <p>Income: $${summary.income}</p>
    <p>Expenses: $${summary.expenses}</p>
    <p>Budget: $${summary.budget}</p>
  `);
});

// Import budget API routes
const budgetRoutes = require('./routes/budget');

// Use the budget routes at /budget
app.use('/budget', budgetRoutes);

//Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});