const getConcatenation = require("../easy/concatenation-of-array");

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

test("Example 1", getConcatenation([1, 2, 1]), [1, 2, 1, 1, 2, 1]);

test("Example 2", getConcatenation([1, 3, 2, 1]), [
  1, 3, 2, 1, 1, 3, 2, 1,
]);

test("Single number", getConcatenation([5]), [5, 5]);

test("All same numbers", getConcatenation([7, 7, 7]), [7, 7, 7, 7, 7, 7]);

test("Longer array", getConcatenation([10, 20, 30, 40, 50]), [
  10, 20, 30, 40, 50, 10, 20, 30, 40, 50,
]);