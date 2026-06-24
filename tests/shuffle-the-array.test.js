const shuffle = require("../easy/shuffle-the-array");

function test(name, actual, expected) {
  const actualString = JSON.stringify(actual);
  const expectedString = JSON.stringify(expected);

  if (actualString === expectedString) {
    console.log(`✅ PASS: ${name}`);
  } else {
    console.log(`❌ FAIL: ${name}`);
    console.log(`   Expected: ${expectedString}`);
    console.log(`   Got:      ${actualString}`);
  }
}

test("Example 1", shuffle([2, 5, 1, 3, 4, 7], 3), [2, 3, 5, 4, 1, 7]);

test("Example 2", shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4), [
  1, 4, 2, 3, 3, 2, 4, 1,
]);

test("Example 3", shuffle([1, 1, 2, 2], 2), [1, 2, 1, 2]);

test("Smallest valid input", shuffle([10, 20], 1), [10, 20]);

test("Different numbers", shuffle([9, 8, 7, 6, 5, 4], 3), [
  9, 6, 8, 5, 7, 4,
]);