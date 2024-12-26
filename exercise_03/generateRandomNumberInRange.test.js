import { describe, it } from 'vitest';
import { expect } from 'chai';
import generateRandomNumberInRange from './generateRandomNumberInRange';

describe('generateRandomNumberInRange', () => {
  it('should throw error when input is not a number', () => {
    expect(() => generateRandomNumberInRange('10')).to.throw();
    expect(() => generateRandomNumberInRange(null)).to.throw();
  });

  it('should generate number within range', () => {
    const min = 1;
    const max = 10;
    const result = generateRandomNumberInRange(max);
    expect(result).to.be.within(min, max);
  });
});
