//interface
//data layer and business logic modules
const { getData, setData } = require('./data');
const { calculateBudget } = require('./budget');

// Example
setData(6000, 3000);
const data = getData();
console.log(`Budget: $${calculateBudget(data.income, data.expenses)}`);