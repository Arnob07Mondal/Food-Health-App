const request = require('supertest');
const app = require('../server');
const { connectDB, disconnectDB, clearDB } = require('./setup');

beforeAll(async () => await connectDB());
afterEach(async () => await clearDB());
afterAll(async () => await disconnectDB());

describe('Food Endpoints', () => {
  it('should add a food entry', async () => {
    const res = await request(app)
      .post('/food/add')
      .send({ name: 'Apple', calories: 95 });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual('Apple');
  });

  it('should get food entries', async () => {
    await request(app)
      .post('/food/add')
      .send({ name: 'Apple', calories: 95 });
      
    const res = await request(app)
      .get('/food/all');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(1);
  });
});
