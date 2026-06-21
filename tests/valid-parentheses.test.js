const isValid = require("../easy/valid-parentheses");

function test(name, actual, expected) {
  if (actual === expected) {
    console.log(`✅ PASS: ${name}`);
  } else {
    console.log(`❌ FAIL: ${name}`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Got:      ${actual}`);
  }
}

test("Example 1", isValid("()"), true);
test("Example 2", isValid("()[]{}"), true);
test("Example 3", isValid("(]"), false);
test("Example 4", isValid("([])"), true);