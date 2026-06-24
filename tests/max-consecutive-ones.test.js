const findMaxConsecutiveOnes = require("../easy/max-consecutive-ones");

function test(name, actual, expected) {
  if (actual === expected) {
    console.log(`✅ PASS: ${name}`);
  } else {
    console.log(`❌ FAIL: ${name}`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Got:      ${actual}`);
  }
}

test("Example 1", findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);

test("Example 2", findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]), 2);

test("All ones", findMaxConsecutiveOnes([1, 1, 1, 1, 1]), 5);

test("All zeroes", findMaxConsecutiveOnes([0, 0, 0, 0]), 0);

test("Single one", findMaxConsecutiveOnes([1]), 1);

test("Single zero", findMaxConsecutiveOnes([0]), 0);

test("Longest streak at the beginning", findMaxConsecutiveOnes([1, 1, 1, 0, 1]), 3);

test("Longest streak at the end", findMaxConsecutiveOnes([0, 1, 1, 0, 1, 1, 1, 1]), 4);