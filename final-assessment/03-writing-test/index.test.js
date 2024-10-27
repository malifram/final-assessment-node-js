import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js'; // Import the sum function

// Test cases for the sum function
test('sum should return the sum of two numbers', () => {
  assert.strictEqual(sum(1, 2), 3);  // Test case 1
  assert.strictEqual(sum(-1, 1), 0); // Test case 2
  assert.strictEqual(sum(0, 0), 0);  // Test case 3
  assert.strictEqual(sum(-1, -1), -2); // Test case 4
  assert.strictEqual(sum(2.5, 2.5), 5); // Test case 5
});
