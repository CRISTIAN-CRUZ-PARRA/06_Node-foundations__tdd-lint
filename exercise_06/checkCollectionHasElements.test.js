import { describe, it } from 'vitest';
import { expect } from 'chai';
import checkCollectionHasElements from './checkCollectionHasElements';

describe('checkCollectionHasElements', () => {
  it('should throw error when input is not an array', () => {
    expect(() => checkCollectionHasElements('not array')).to.throw();
    expect(() => checkCollectionHasElements(123)).to.throw();
  });

  it('should check if array has elements', () => {
    expect(checkCollectionHasElements([])).to.be.false;
    expect(checkCollectionHasElements([1])).to.be.true;
    expect(checkCollectionHasElements([1, 2, 3])).to.be.true;
  });
});
