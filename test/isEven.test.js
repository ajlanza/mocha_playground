const isEven = require('../isEven');
const expect = require('chai').expect;

describe('isEven', () => {
  it('should find 4 to be even', () => {
    expect(isEven(4)).to.be.true;
  });

  it('should find 5 to not be even', () => {
    expect(isEven(5)).to.be.false;
  });
});