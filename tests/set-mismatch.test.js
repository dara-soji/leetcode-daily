const findErrorNums = require("../easy/set-mismatch");

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

test("Example 1", findErrorNums([1, 2, 2, 4]), [2, 3]);

test("Example 2", findErrorNums([1, 1]), [1, 2]);

test("Duplicate is at the end", findErrorNums([1, 2, 3, 4, 4, 6]), [4, 5]);

test("Missing number is 1", findErrorNums([2, 2]), [2, 1]);

test("Duplicate is bigger number", findErrorNums([1, 3, 3]), [3, 2]);

test("Longer array", findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]), [
  2, 10,
]);