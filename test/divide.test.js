const { divide } = require('../index');
const chai = require('chai');
const expect = chai.expect;

describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
    //define inputs
    const a = 8;
    const b = 4;
    const expectedAnswer = 2;
    //invoke the function
    const actualAnswer = divide(a, b);
    //assert that expected === actual
    expect(actualAnswer).to.equal(expectedAnswer);
  });

  it('should throw an error when divided by 0', () => {
    //define inputs
    const a =8, b = 0;
    //set up function call
    const fn = () => {
      divide(a,b)
    };
    expect(fn).to.throw();
  });

  it('number equals number', () => {
    expect(2).to.equal(2, '2 === 2'); 
  });

  it('number equals string', () => { 
    expect(2).to.equal("2", '2 === "2"');
  });

  it('number equals wrong number', () => {
    expect(2).to.equal(3, '2 === 3');
  });

  it('string equals wrong string', () => {
    expect('hen').to.equal('Hen', "'hen' === 'Hen'");
  });
  
  it('check an object without deep', () => {
    const a = { x: 5};
    const b = { x: 5};
    expect(a).to.equal(b, 'without deep');
  });

  it('check an object with deep', () => {
    const a = { x: 5};
    const b = { x: 5 };
    expect(a).to.deep.equal(b);
  });
});
