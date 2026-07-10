const dailyTemperatures = require("../medium/daily-temperatures");

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

test("Example 1", dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [
  1, 1, 4, 2, 1, 1, 0, 0,
]);

test("Example 2", dailyTemperatures([30, 40, 50, 60]), [
  1, 1, 1, 0,
]);

test("Example 3", dailyTemperatures([30, 60, 90]), [
  1, 1, 0,
]);

test("Temperatures going down", dailyTemperatures([90, 80, 70, 60]), [
  0, 0, 0, 0,
]);

test("All same temperatures", dailyTemperatures([70, 70, 70, 70]), [
  0, 0, 0, 0,
]);

test("One temperature", dailyTemperatures([50]), [
  0,
]);

test("Warmer day after a gap", dailyTemperatures([70, 60, 65, 80]), [
  3, 1, 1, 0,
]);

test("Mixed temperatures", dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78]), [
  3, 1, 1, 2, 1, 1, 0, 1, 1, 0,
]);