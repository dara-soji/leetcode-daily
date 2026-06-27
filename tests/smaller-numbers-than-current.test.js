const smallerNumbersThanCurrent = require("../easy/smaller-numbers-than-current");

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

test("Example 1", smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [
  4, 0, 1, 1, 3,
]);

test("Example 2", smallerNumbersThanCurrent([6, 5, 4, 8]), [
  2, 1, 0, 3,
]);

test("Example 3", smallerNumbersThanCurrent([7, 7, 7, 7]), [
  0, 0, 0, 0,
]);

test("Single number", smallerNumbersThanCurrent([5]), [0]);

test("Already sorted ascending", smallerNumbersThanCurrent([1, 2, 3, 4, 5]), [
  0, 1, 2, 3, 4,
]);

test("Sorted descending", smallerNumbersThanCurrent([5, 4, 3, 2, 1]), [
  4, 3, 2, 1, 0,
]);

test("With duplicates", smallerNumbersThanCurrent([2, 2, 1, 3]), [
  1, 1, 0, 3,
]);