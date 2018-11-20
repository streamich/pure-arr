import {slice, sort, concat, copyWithin} from '..';

describe('slice()', () => {
  test('returns the same array, when no arguments provided', () => {
    expect(slice([])).toEqual([]);
    expect(slice([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('returns a copy of the array', () => {
    const arr = [1, 2, 3];
    const result = slice(arr);
    expect(result).toEqual(arr);
    expect(result).not.toBe(arr);
  });

  test('does not mutate the original array', () => {
    const arr = [1, 2, 3];
    const result = slice(arr);
    expect(result).toEqual(arr);
    expect(arr).not.toBe([1, 2, 3]);
  });

  test('is idempotent', () => {
    const arr = [1, 2, 3];
    const result = slice(slice(slice(arr)));
    expect(result).toEqual(arr);
  });

  test('can specify slice start', () => {
    const arr = [1, 2, 3, 4];
    const result = slice(arr, 1);
    expect(result).toEqual([2, 3, 4]);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('can specify slice end', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const result = slice(arr, 1, 3);
    expect(result).toEqual([2, 3]);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('sort()', () => {
  test('sorts an array', () => {
    expect(sort([2, 1, 3])).toEqual([1, 2, 3]);
  });

  test('does not mutate original array', () => {
    const arr = [2, 3, 1];
    sort(arr);
    expect(arr).toEqual([2, 3, 1]);
  });

  test('can use comparator function', () => {
    const comparator = (a, b) => a < b ? 1 : -1;
    expect(sort([2, 1, 3], comparator)).toEqual([3, 2, 1]);
  });
});

describe('concat()', () => {
  test('concatenates two empty arrays', () => {
    expect(concat([], [])).toEqual([]);
  });

  test('concatenates two arrays', () => {
    const arr1 = [1];
    const arr2 = [2];
    const result = concat(arr1, arr2);

    expect(result).toEqual([1, 2]);
  });

  test('does not mutate original arrays', () => {
    const arr1 = [1];
    const arr2 = [2];
    concat(arr1, arr2);

    expect(arr1).toEqual([1]);
    expect(arr2).toEqual([2]);
  });
});

describe('copyWithin()', () => {
  test('copies requested part', () => {
    const arr = [1, 2, 3, 4];
    const result = copyWithin(arr, 0, 1, 3);
    expect(result).toEqual([2, 3, 3, 4]);
  });

  test('does not mutate original array', () => {
    const arr = [1, 2, 3, 4];
    copyWithin(arr, 0, 1, 3);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});
