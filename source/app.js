//interface
//data layer and business logic modules
const { setData, addIncome, addExpense } = require('./data');
const { getBudgetSummary } = require('./budget');

//set initial income and expenses values
setData(5000, 2000);

//Add income and expenses
addIncome(500);
addExpense(100);

//Budget summary
const summary = getBudgetSummary();

//budget summary displayed
console.log("Budget Summary:");
console.log(`Income: $${summary.income}`);
console.log(`Expenses: $${summary.expenses}`);
console.log(`Budget: $${summary.budget}`);