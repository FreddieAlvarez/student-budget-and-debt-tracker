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

//updates data
function setData(income, expenses) {
    sampleData.income = income;
    sampleData.expenses = expenses;
}

module.exports = { getData, setData };