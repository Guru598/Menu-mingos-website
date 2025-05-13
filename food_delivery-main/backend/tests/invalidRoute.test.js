// tests/invalidRoute.test.js
import request from 'supertest';
import express from 'express';

const app = express();

// Invalid route (i.e., no handler for this route)
app.get('/valid', (req, res) => {
  res.status(200).send({ message: 'Valid route' });
});

describe('GET /invalid', () => {
  it('should return 404 for invalid route', async () => {
    const response = await request(app).get('/invalid');
    expect(response.status).toBe(404);
  });
});
