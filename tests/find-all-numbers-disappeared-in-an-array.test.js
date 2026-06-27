const findDisappearedNumbers = require("../easy/find-all-numbers-disappeared-in-an-array");

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

test("Example 1", findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [
  5, 6,
]);

test("Example 2", findDisappearedNumbers([1, 1]), [2]);

test("No missing numbers", findDisappearedNumbers([1, 2, 3, 4, 5]), []);

test("Only one number", findDisappearedNumbers([1]), []);

test("All same number", findDisappearedNumbers([2, 2, 2, 2]), [1, 3, 4]);

test("Missing first number", findDisappearedNumbers([2, 2]), [1]);

test("Missing last number", findDisappearedNumbers([1, 1]), [2]);

test("Multiple missing numbers", findDisappearedNumbers([1, 1, 2, 2, 3, 3]), [
  4, 5, 6,
]);