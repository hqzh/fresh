'use strict';
const expect = require('chai').expect;
const sum = require('../dist/index').sum;

describe('ts-hi function test', () => {
  it('should return 2', () => {
    const result = sum(1, 1);
    expect(result).to.equal(2);
  });
});