const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');

const app = require('../src/api');

describe('Profile API', () => {


  it('should retrieve a profile', async () => {
    const response = await supertest(app)
      .get('/api/profile')

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('profile');
    // Add more assertions as needed
  });

  // Add more test cases for the Profile API endpoints

  after(() => {
    // Perform any necessary cleanup after running the tests
    // For example, you can close database connections
  });
});