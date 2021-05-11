const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Express App', () => {
  it ('should return a message from GET /', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello Express!');
  });
});

describe('Quotient endpoint', () => {
  it('8/4 should be 2', () => {
    return supertest(app)
      .get('/quotient')
      .query({ a: 8, b: 4})
      .expect(200, '8 divided by 4 is 2.');
  })

  it('should return 400 if a is missing', () => {
    return supertest(app)
      .get('/quotient')
      .query({b: 4})
      .expect(400, 'Value for A is needed.');
  });

  it('should return 400 if B is missing', () => {
    return supertest(app)
      .get('/quotient')
      .query({a: 8})
      .expect(400, 'Value for B is needed.')
  });

  it('should return 400 if A is not numeric', () => {
    return supertest(app)
      .get('/quotient')
      .query({a: 'goats', b: 4})
      .expect(400, 'Value for A must be numeric.');
  });

  it('should return 400 if B is not numeric', () => {
    return supertest(app)
      .get('/quotient')
      .query({a: 8, b: 'goats'})
      .expect(400, 'Value for B must be numeric.');
  });

  it('should return 400 if b is 0', () => {
    return supertest(app)
      .get('/quotient')
      .query({a: 8, b: 0})
      .expect(400, 'Cannot divide by 0.');
  });
});