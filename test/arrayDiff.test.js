const arrayDiff = require('../arrayDiff');
const expect = require('chai').expect;

describe('arrayDiff function', () => {
  it('should return a if no common elements', () => {
    expect(arrayDiff([1,2,3], [4,5,6])).to.deep.equal([1,2,3]);
  })

  it('should return [] if the same', () => {
    expect(arrayDiff([1,2,3], [1,2,3])).to.deep.equal([]);
  })
  // .eql is the same as .deep.equal
  it('should return correctly if some elements are the same', () => {
    expect(arrayDiff([1,2,3,4,5], [2,4,5])).to.eql([1,3]);
  })
  it('should remove 1 from [1,2,3]', () => {
    expect(arrayDiff([1,2,3], [1])).to.not.include(1);
  });
});