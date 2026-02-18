//data layer 
//stores and retrieves data
const sampleData = {
    income: 0,
    expenses: 0
};

//gets data
function getData() {
    return sampleData;
}

//updates data with updates
function setData(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number') {
        throw new Error('Income and expenses must be numbers');
    }
    sampleData.income = income;
    sampleData.expenses = expenses;
}

//income 
function addIncome(amount) {
    if (typeof amount !== 'number' || amount < 0) {
        throw new Error('Income must be a positive number');
    }
    sampleData.income += amount;
}

//expense 
function addExpense(amount) {
    if (typeof amount !== 'number' || amount < 0) {
        throw new Error('Expense must be a positive number');
    }
    sampleData.expenses += amount;
}

module.exports = { getData, setData, addIncome, addExpense };