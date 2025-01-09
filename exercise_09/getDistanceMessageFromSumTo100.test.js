import { describe, it } from 'vitest';
import { expect } from 'chai';
import getDistanceMessageFromSumTo100 from './getDistanceMessageFromSumTo100';

describe('getDistanceMessageFromSumTo100', () => {
  it('should throw error when input is not a number', () => {
    expect(() => getDistanceMessageFromSumTo100('10')).to.throw();
    expect(() => getDistanceMessageFromSumTo100(null)).to.throw();
  });

  it('should return correct message', () => {
    // Mock Math.random to return 0.5 (50 when multiplied by 101)
    const originalRandom = globalThis.Math.random;
    globalThis.Math.random = () => 0.5;

    expect(getDistanceMessageFromSumTo100(20))
      .to.equal('Sum with value 50 is left in 30 from number 100');
    expect(getDistanceMessageFromSumTo100(60))
      .to.equal('Sum with value 50 exceeds in 10 from number 100');

    // Restore original Math.random
    globalThis.Math.random = originalRandom;
  });
});
