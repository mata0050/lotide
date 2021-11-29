const expect = require('chai').expect;
const tail = require('../tail');

describe('#tail', () => {
  it(`returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']`, () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs']);
    expect(result).to.eql(['Lighthouse', 'Labs']);
  });
});
