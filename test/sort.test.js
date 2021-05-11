const expect = require('chai').expect;
const sort = require('../index').sort;

describe('Sort function', () => {
  it('should sort positive numbers correctly', () => {
    expect(sort([1,5,3,2,4])).to.deep.equal([1,2,3,4,5]);
  });
  // it('should sort negative numbers correctly', () => {
  //   expect(sort([-1, -2 ,-3, -4, -5])).to.deep.equal([-5, -4, -3, -2, -1]);
  // });
})