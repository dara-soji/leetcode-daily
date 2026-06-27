const buildArray = require("../easy/build-an-array-with-stack-operations");

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

test("Example 1", buildArray([1, 3], 3), ["Push", "Push", "Pop", "Push"]);

test("Example 2", buildArray([1, 2, 3], 3), ["Push", "Push", "Push"]);

test("Example 3", buildArray([1, 2], 4), ["Push", "Push"]);

test("Target starts after 1", buildArray([2, 3, 4], 4), [
  "Push",
  "Pop",
  "Push",
  "Push",
  "Push",
]);

test("Only one target number", buildArray([2], 2), ["Push", "Pop", "Push"]);

test("Skip multiple numbers", buildArray([3], 3), [
  "Push",
  "Pop",
  "Push",
  "Pop",
  "Push",
]);

test("Target is last number only", buildArray([5], 5), [
  "Push",
  "Pop",
  "Push",
  "Pop",
  "Push",
  "Pop",
  "Push",
  "Pop",
  "Push",
]);

test("Longer target with gaps", buildArray([1, 3, 5], 5), [
  "Push",
  "Push",
  "Pop",
  "Push",
  "Push",
  "Pop",
  "Push",
]);