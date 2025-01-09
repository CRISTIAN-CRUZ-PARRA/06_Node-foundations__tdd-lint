import { describe, it } from 'vitest';
import { expect } from 'chai';
import getTotalWordsFromString from './getTotalWordsFromString';

describe('getTotalWordsFromString', () => {
  it('should throw error when input is not a string', () => {
    expect(() => getTotalWordsFromString(123)).to.throw();
    expect(() => getTotalWordsFromString(null)).to.throw();
  });

  it('should count words correctly', () => {
    expect(getTotalWordsFromString('')).to.equal(0);
    expect(getTotalWordsFromString('hello')).to.equal(1);
    expect(getTotalWordsFromString('hello world')).to.equal(2);
    expect(getTotalWordsFromString('this is a test')).to.equal(4);
  });
});
