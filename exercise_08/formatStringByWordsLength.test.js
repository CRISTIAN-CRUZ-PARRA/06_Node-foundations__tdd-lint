import { describe, it } from 'vitest';
import { expect } from 'chai';
import formatStringByWordsLength from './formatStringByWordsLength';

describe('formatStringByWordsLength', () => {
  it('should throw error when input is not a string', () => {
    expect(() => formatStringByWordsLength(123)).to.throw();
    expect(() => formatStringByWordsLength(null)).to.throw();
  });

  it('should format string based on word count', () => {
    expect(formatStringByWordsLength('one two three')).to.equal('one two three');
    expect(formatStringByWordsLength('one two three four five six')).to.equal('ONE TWO THREE FOUR FIVE SIX');
    expect(formatStringByWordsLength('')).to.equal('');
  });
});
