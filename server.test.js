// server.test.js
const request = require('supertest'); // Supertest is a library for testing HTTP servers
const app = require('./server'); // Import the 'app' from server.js

describe('Server Routes', () => {
  it('should respond with "Hello from the server!"', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello from the server!');
  });
});
