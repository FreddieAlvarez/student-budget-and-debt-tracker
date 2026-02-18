//controlelr layer
//calculated budget determined by income and expesnes

//import data layer
const { getData } = require('./data');

//core calculation (income-expenses)
function calculateBudget(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number') {
        throw new Error('Income and expenses must be numbers');
    }
    return income - expenses;
}

//budget summary
function getBudgetSummary() {
    const data = getData();
    return {
        income: data.income,
        expenses: data.expenses,
        budget: calculateBudget(data.income, data.expenses)
    };
}

module.exports = { calculateBudget, getBudgetSummary };