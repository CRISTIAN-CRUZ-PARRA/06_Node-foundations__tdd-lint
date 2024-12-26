import { describe, it } from 'vitest';
import { expect } from 'chai';
import isTypeOf from './isTypeOf';

describe('isTypeOf', () => {
  it('should throw error when type is not valid', () => {
    expect(() => isTypeOf('test', 'invalid')).to.throw();
    expect(() => isTypeOf('test', 123)).to.throw();
  });

  it('should check types correctly', () => {
    expect(isTypeOf('hello', 'string')).to.be.true;
    expect(isTypeOf(123, 'number')).to.be.true;
    expect(isTypeOf(true, 'boolean')).to.be.true;
    expect(isTypeOf([], 'array')).to.be.true;
    expect(isTypeOf('hello', 'number')).to.be.false;
  });
});
