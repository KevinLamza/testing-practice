// const sum = require('./sum');
import { sum } from './functions.js';
import { capitalize } from './functions.js';
import { reverseString } from './functions.js';

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
