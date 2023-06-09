import { expect } from 'chai';
import { combination } from './combination';

describe('combination of string arrays', function () {
  it('combine two string arrays', function () {
    const result = combination(['one', 'two'], ['1', '2']);
    expect(result.length).to.equal(4);
    expect(result).to.deep.include(['one', '1']);
    expect(result).to.deep.include(['one', '2']);
    expect(result).to.deep.include(['two', '1']);
    expect(result).to.deep.include(['two', '2']);
  });

  it('combine three string arrays', function () {
    const result = combination(['one', 'two'], ['1', '2'], ['a', 'b']);
    expect(result.length).to.equal(8);
    expect(result).to.deep.include(['one', '1', 'a']);
    expect(result).to.deep.include(['one', '1', 'b']);
    expect(result).to.deep.include(['one', '2', 'a']);
    expect(result).to.deep.include(['one', '2', 'b']);
    expect(result).to.deep.include(['two', '1', 'a']);
    expect(result).to.deep.include(['two', '1', 'b']);
    expect(result).to.deep.include(['two', '2', 'a']);
    expect(result).to.deep.include(['two', '2', 'b']);
  });

  it('combine two arrays with mixed arrays', function () {
    const result = combination<unknown>(['one', 'two'], [{ one: 1 }, { two: 2 }]);
    expect(result.length).to.equal(4);
    expect(result).to.deep.include(['one', { one: 1 }]);
    expect(result).to.deep.include(['one', { two: 2 }]);
    expect(result).to.deep.include(['two', { one: 1 }]);
    expect(result).to.deep.include(['two', { two: 2 }]);
  });
});
