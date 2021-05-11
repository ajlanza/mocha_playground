const sum = require('../sumArray');
const expect = require('chai').expect;

describe('sumArray', () => {
  it('should return a promise', () => {
    expect(sum([1,2,3])).to.be.a('promise');
  });

  it('should return the sum if given integers', () => {
    return (sum([1,2,3,4,7]))
      .then(ans => {
        expect(ans).to.equal(17);
      });
  });

  it('should sum an array of numbers and numeric strings', () => {
    return sum([1,2,'3',4,'7'])
      .then(ans => {
        expect(ans).to.equal(17);
      });
  });

  it('should sum an array of numbers and non-numeric strings', () => {
    return sum([1,2,'3','11', 'hens'])
      .then(ans => {
        expect(ans).to.be.a('number').that.equal(17);
      });
  });
});