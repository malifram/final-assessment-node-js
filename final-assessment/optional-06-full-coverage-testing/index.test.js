import { test } from 'node:test';
import assert from 'node:assert';
import sum from './sum.js'; // Import the sum function

// Test cases for the sum function
test('sum should return 0 for non-number inputs', () => {
  assert.strictEqual(sum('a', 2), 0);
  assert.strictEqual(sum(1, 'b'), 0);
  assert.strictEqual(sum(null, 2), 0);
  assert.strictEqual(sum(undefined, 3), 0);
  assert.strictEqual(sum({}, 1), 0);
});

test('sum should return 0 for negative numbers', () => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(1, -2), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test('sum should return the correct sum for positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(10, 20), 30);
  assert.strictEqual(sum(100, 200), 300);
});
