const request = require('supertest');
const app = require('../server');
const { connectDB, disconnectDB, clearDB } = require('./setup');

beforeAll(async () => await connectDB());
afterEach(async () => await clearDB());
afterAll(async () => await disconnectDB());

jest.mock('../services/geminiService', () => ({
  generateInsight: jest.fn().mockRejectedValue(new Error('Mocked Gemini Failure'))
}));

describe('Recommendation Endpoints', () => {
  it('should get insights and use fallback when Gemini fails', async () => {
    await request(app)
      .post('/food/add')
      .send({ name: 'Big Burger', calories: 2500 });

    const res = await request(app)
      .get('/recommendation');

    expect(res.statusCode).toEqual(200);
    expect(res.body.totalCaloriesToday).toEqual(2500);
    expect(res.body.smartInsight).toContain('You skipped breakfast'); // Fallback rule
    expect(res.body).toHaveProperty('timeBasedNudge');
    expect(res.body).toHaveProperty('healthScore');
    expect(res.body).toHaveProperty('streak');
  });
});
