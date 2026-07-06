const exclusiveTime = require("../medium/exclusive-time-of-functions");

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

test(
  "Example 1",
  exclusiveTime(2, [
    "0:start:0",
    "1:start:2",
    "1:end:5",
    "0:end:6",
  ]),
  [3, 4]
);

test(
  "Example 2 - nested same function",
  exclusiveTime(1, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "0:end:6",
  ]),
  [7]
);

test(
  "Example 3 - multiple nested calls",
  exclusiveTime(2, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "1:start:6",
    "1:end:6",
    "0:end:7",
  ]),
  [7, 1]
);

test(
  "Single function only",
  exclusiveTime(1, [
    "0:start:0",
    "0:end:0",
  ]),
  [1]
);

test(
  "Two functions no nesting",
  exclusiveTime(2, [
    "0:start:0",
    "0:end:2",
    "1:start:3",
    "1:end:4",
  ]),
  [3, 2]
);

test(
  "Three functions nested",
  exclusiveTime(3, [
    "0:start:0",
    "1:start:2",
    "2:start:3",
    "2:end:4",
    "1:end:5",
    "0:end:6",
  ]),
  [3, 2, 2]
);