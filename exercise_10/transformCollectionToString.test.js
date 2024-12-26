import { describe, it } from 'vitest';
import { expect } from 'chai';
import transformCollectionToString from './transformCollectionToString';

describe('transformCollectionToString', () => {
  it('should throw error when input is not an array', () => {
    expect(() => transformCollectionToString('not array')).to.throw();
    expect(() => transformCollectionToString(123)).to.throw();
  });

  it('should transform array to string correctly', () => {
    expect(transformCollectionToString([])).to.equal('');
    expect(transformCollectionToString(['a'])).to.equal('a');
    expect(transformCollectionToString(['a', 'b', 'c'])).to.equal('a|b|c');
  });
});
