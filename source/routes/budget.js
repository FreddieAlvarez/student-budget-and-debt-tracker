const express = require('express');
const router = express.Router();

// Import your controller and data layer
const { calculateBudget, getBudgetSummary } = require('../budget');
const { getData, setData } = require('../data');

// GET current budget summary
router.get('/', (req, res) => {
  try {
    const summary = getBudgetSummary();
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST to update budget (income & expenses)
router.post('/', (req, res) => {
  const { income, expenses } = req.body;

  // Validate input
  if (income == null || expenses == null) {
    return res.status(400).json({ error: 'Income and expenses are required' });
  }

  try {
    // Update data
    setData(Number(income), Number(expenses));

    // Get updated summary
    const summary = getBudgetSummary();
    res.json({ message: 'Budget updated', summary });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;