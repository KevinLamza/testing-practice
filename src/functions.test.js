// const sum = require('./sum');
import { sum } from './functions.js';
import { capitalize } from './functions.js';
import { reverseString } from './functions.js';
import { calculator } from './functions.js';
import { caesarCipher } from './functions.js';
import { analyzeArray } from './functions.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize', () => {
  expect(capitalize('apple')).toBe('Apple');
  expect(() => {
    capitalize(0);
  }).toThrow();
});

// take string, return error when it's not a string
// hardcode return capitalized
// with logic

test('reverse', () => {
  expect(reverseString('apple')).toBe('elppa');
  expect(() => {
    reverseString(0);
  }).toThrow();
});

test('calculator', () => {
  expect(calculator.add(5, 1)).toBeCloseTo(6);
  expect(calculator.subtract(5, 1)).toBeCloseTo(4);
  expect(calculator.multiply(5, 1)).toBeCloseTo(5);
  expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
  expect(() => {
    calculator.add(test, 1);
  }).toThrow();
  expect(() => {
    calculator.divide(5, 0);
  }).toThrow();
});

test('caesar cipher', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('aBc', 3)).toBe('dEf');
  expect(caesarCipher('xyZ', 3)).toBe('abC');
  expect(caesarCipher('x.yZ', 3)).toBe('a.bC');
  expect(caesarCipher('x.y!!Z', 10)).toBe('h.i!!J');
});

test('analyze array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toStrictEqual({
    average: 4,
    min: 1,
    max: 7,
    length: 7,
  });
  expect(analyzeArray([12, 2, 34, 4, 555, 6, -7])).toStrictEqual({
    average: 86.57,
    min: -7,
    max: 555,
    length: 7,
  });
  expect(() => {
    analyzeArray([1, 2, 3, 't', 5]);
  }).toThrow();
});
