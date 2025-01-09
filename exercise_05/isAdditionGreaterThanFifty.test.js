import { describe, it } from 'vitest';
import { expect } from 'chai';
import isAdditionGreaterThanFifty from './isAdditionGreaterThanFifty';

describe('isAdditionGreaterThanFifty', () => {
  it('should throw error when input is not a number', () => {
    expect(() => isAdditionGreaterThanFifty('10', 5)).to.throw();
    expect(() => isAdditionGreaterThanFifty(10, '5')).to.throw();
  });

  it('should check if sum is greater than 50', () => {
    expect(isAdditionGreaterThanFifty(30, 25)).to.be.true;
    expect(isAdditionGreaterThanFifty(20, 25)).to.be.false;
    expect(isAdditionGreaterThanFifty(25, 25)).to.be.false;
  });
});
