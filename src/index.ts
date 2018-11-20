const prototype = Array.prototype;
const {
  slice: $slice,
  sort: $sort,
  concat: $concat,
  copyWithin: $copyWithin,
  every: $every,
  join: $join,
  find: $find,
  entries: $entries,
  flat: $flat,
  flatMap: $flatMap,
  forEach: $forEach,
  filter: $filter,
  map: $map,
  pop: $pop,
  push: $push,
  shift: $shift,
  reverse: $reverse,
  some: $some,
  splice: $splice,
  unshift: $unshift,
  values: $values,
  reduce: $reduce,
  reduceRight: $reduceRight,
  includes: $includes,
  keys: $keys,
  fill: $fill,
  findIndex: $findIndex,
  indexOf: $indexOf,
  lastIndexOf: $lastIndexOf,
  toLocaleString: $toLocaleString,
  toString: $toString,
} = prototype;

export const slice = <T>(arr: T[], start?: number, end?: number) =>
  $slice.call(arr, start, end);
export const sort = <T>(arr: T[], comparator?: (a: T, b: T) => number) =>
  $sort.call(slice(arr), comparator);
export const concat = <T>(arr: T[], ...rest: T[][]): T[] =>
  $concat.apply(arr, rest);
export const copyWithin = <T>(arr: T[], target: number, start: number, end?: number): T[] =>
  $copyWithin.call(slice(arr), target, start, end);
export const every = <T>(arr: T[], callback: (value: never, index: number, array: never[]) => boolean): boolean =>
  $every.call(arr, callback);
export const join = (arr, separator) => $join.call(arr, separator);
export const find = (arr: any[], predicate) => $find.call(arr, predicate);
export const entries = (arr: any[]) => $entries.call(arr);
export const flat = (arr, depth?: number) => $flat.call(arr, depth);
export const flatMap = (arr, callback) => $flatMap.call(arr, callback);
export const forEach =  (arr, callback) => $forEach.call(arr, callback);
export const filter = (arr, callback) => $filter.call(arr, callback);
export const map = (arr, callback) => $map.call(arr, callback);
export const pop = (arr) => {
  const copy = slice(arr);
  return [$pop.call(copy), copy];
};
export const push = (arr, ...items) => $push.apply(slice(arr), items);
export const shift = (arr) => {
  const copy = slice(arr);
  return [$shift.call(copy), copy];
};
export const reverse = (arr) => $reverse.call(slice(arr));
export const some = (arr, callback) => $some.call(arr, callback);
export const splice = (arr, start: number, deleteCount?: number) => {
  const copy = slice(arr);
  $splice.call(copy, start, deleteCount);
  return copy;
};
export const unshift = (arr, ...items) => {
  const copy = slice(arr);
  $unshift.apply(copy, items);
  return copy;
};
export const values = (arr) => $values.call(arr);
export const keys = (arr) => $keys.call(arr);
export const reduce = (arr, callback, initialValue) =>
  $reduce.call(arr, callback, initialValue);
export const reduceRight = (arr, callback, initialValue) =>
  $reduceRight.call(arr, callback, initialValue);
export const includes = (arr, searchElement, fromIndex) =>
  $includes.call(arr, searchElement, fromIndex);
export const fill = (arr, value, start, end) => {
  const copy = slice(arr);
  $fill.call(arr, value, start, end);
  return copy;
};
export const findIndex = (arr, predicate) => $findIndex.call(arr, predicate);
export const indexOf = (arr, searchElement, fromIndex) =>
  $indexOf.call(arr, searchElement, fromIndex);
export const lastIndexOf = (arr, searchElement, fromIndex) =>
  $lastIndexOf.call(arr, searchElement, fromIndex);
export const length = (arr) => arr.length;
export const toLocaleString = (arr) => $toLocaleString.call(arr);
export const toString = (arr) => $toString.call(arr);
