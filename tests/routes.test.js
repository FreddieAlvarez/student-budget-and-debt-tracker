const request = require('supertest');
const express = require('express');
const budgetRoutes = require('../source/routes/budget');
const { setData } = require('../source/data');

// express app for testing
const app = express();
app.use(express.json());
app.use('/budget', budgetRoutes);

describe('Budget API Integration Tests', () => {

  beforeEach(() => {
    setData(0, 0); // reset data before each test
  });

  test('GET /budget returns current budget', async () => {
    setData(5000, 2000);
    const res = await request(app).get('/budget');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      income: 5000,
      expenses: 2000,
      budget: 3000
    });
  });

  test('POST /budget updates the budget', async () => {
    const res = await request(app)
      .post('/budget')
      .send({ income: 7000, expenses: 3000 });
    expect(res.statusCode).toBe(200);
    expect(res.body.summary).toEqual({
      income: 7000,
      expenses: 3000,
      budget: 4000
    });
  });

  test('POST /budget returns error for missing fields', async () => {
    const res = await request(app).post('/budget').send({ income: 5000 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Income and expenses are required');
  });

  test('POST /budget returns error for invalid values', async () => {
    const res = await request(app).post('/budget').send({ income: 'abc', expenses: 1000 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/Income and expenses must be numbers/);
  });

});