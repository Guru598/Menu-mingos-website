// tests/asyncApi.test.js
import request from 'supertest';
import express from 'express';

// Mocking an async database function
const fetchData = () => new Promise((resolve) => setTimeout(() => resolve({ data: 'Async Data' }), 100));

const app = express();
app.get('/async-api', async (req, res) => {
  const data = await fetchData();
  res.status(200).send(data);
});

describe('GET /async-api', () => {
  it('should return async data', async () => {
    const response = await request(app).get('/async-api');
    expect(response.status).toBe(200);
    expect(response.body.data).toBe('Async Data');
  });
});
