// tests/mockFunction.test.js
import request from 'supertest';
import express from 'express';

// Mocking a function
const fetchUser = jest.fn().mockResolvedValue({ name: 'John Doe' });

const app = express();
app.get('/user', async (req, res) => {
  const user = await fetchUser();
  res.status(200).send(user);
});

describe('GET /user', () => {
  it('should return mocked user data', async () => {
    const response = await request(app).get('/user');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('John Doe');
    expect(fetchUser).toHaveBeenCalled();  // Ensure the mock was called
  });
});
