//controlelr layer
//calculated budget determined by income and expesnes
function calculateBudget(income, expenses) {
    //core calculation (income-expenses)
    return income - expenses;
}

module.exports = { calculateBudget };