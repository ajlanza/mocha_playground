const app = require('../app');
const { expect } = require('chai');
const supertest = require('supertest');

describe('Midpoint endpoint', () => {
  it('should find mindpoint between NY and LA', () => {
    const query = {
      lat1: 40.6976701,
      lon1: -74.2598674,
      lat2: 34.0207305,
      lon2: -118.6919221
    };
    const expected = {
      lat: 39.50597300917347,
      lon: -97.51789156106972
    };
    return supertest(app)
      .get('/midpoint')
      .query(query)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.have.all.keys('lat', 'lon');
        expect(res.body).to.eql(expected);
      });
  })
});