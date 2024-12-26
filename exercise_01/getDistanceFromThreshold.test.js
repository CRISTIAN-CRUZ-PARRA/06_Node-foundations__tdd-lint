import { describe, it } from 'vitest';
import { expect } from 'chai';
import getDistanceFromThreshold from './getDistanceFromThreshold';

describe('getDistanceFromThreshold', () => {
  it('should throw error when input is not a number', () => {
    expect(() => getDistanceFromThreshold('10', 5)).to.throw();
    expect(() => getDistanceFromThreshold(10, '5')).to.throw();
  });

  it('should return correct distance', () => {
    expect(getDistanceFromThreshold(10, 15)).to.equal(5);
    expect(getDistanceFromThreshold(15, 10)).to.equal(5);
  });
});
