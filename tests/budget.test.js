//Import functions
const { calculateBudget, getBudgetSummary } = require('../source/budget');
const { setData, addIncome, addExpense } = require('../source/data');

describe('Budget App Unit Tests', () => {

  //Reset data before each test
  beforeEach(() => {
    setData(0, 0);
  });

  //calculateBudget tests
  test('calculateBudget returns correct value', () => {
    expect(calculateBudget(5000, 2000)).toBe(3000);
    expect(calculateBudget(0, 0)).toBe(0);
  });

  test('calculateBudget throws error for invalid inputs', () => {
    expect(() => calculateBudget('a', 100)).toThrow('Income and expenses must be numbers');
    expect(() => calculateBudget(100, null)).toThrow('Income and expenses must be numbers');
  });

  //addIncome tests
  test('addIncome correctly updates income', () => {
    addIncome(1000);
    const summary = getBudgetSummary();
    expect(summary.income).toBe(1000);
  });

  test('addIncome throws error for invalid input', () => {
    expect(() => addIncome(-100)).toThrow('Income must be a positive number');
    expect(() => addIncome('abc')).toThrow('Income must be a positive number');
  });

  //addExpense tests
  test('addExpense correctly updates expenses', () => {
    addExpense(500);
    const summary = getBudgetSummary();
    expect(summary.expenses).toBe(500);
  });

  test('addExpense throws error for invalid input', () => {
    expect(() => addExpense(-50)).toThrow('Expense must be a positive number');
    expect(() => addExpense('xyz')).toThrow('Expense must be a positive number');
  });

  //getBudgetSummary tests
  test('getBudgetSummary returns correct structure and calculation', () => {
    setData(4000, 1500);
    addIncome(500);   // 4500
    addExpense(200);  // 1700
    const summary = getBudgetSummary();
    expect(summary).toEqual({
      income: 4500,
      expenses: 1700,
      budget: 2800
    });
  });

});