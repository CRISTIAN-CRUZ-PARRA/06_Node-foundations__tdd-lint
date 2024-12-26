import { describe, it } from 'vitest';
import { expect } from 'chai';
import isGreaterThan from './isGreaterThan';

describe('isGreaterThan', () => {
  it('should throw error when input is not a number', () => {
    expect(() => isGreaterThan('10', 5)).to.throw();
    expect(() => isGreaterThan(10, '5')).to.throw();
  });

  it('should compare numbers correctly', () => {
    expect(isGreaterThan(10, 5)).to.be.true;
    expect(isGreaterThan(5, 10)).to.be.false;
    expect(isGreaterThan(10, 10)).to.be.false;
  });
});
