const evalRPN = require("../medium/evaluate-reverse-polish-notation");

function test(name, actual, expected) {
  if (actual === expected) {
    console.log(`✅ PASS: ${name}`);
  } else {
    console.log(`❌ FAIL: ${name}`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Got:      ${actual}`);
  }
}

test("Example 1", evalRPN(["2", "1", "+", "3", "*"]), 9);

test("Example 2", evalRPN(["4", "13", "5", "/", "+"]), 6);

test(
  "Example 3",
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]),
  22
);

test("Single number", evalRPN(["7"]), 7);

test("Addition only", evalRPN(["5", "3", "+"]), 8);

test("Subtraction order matters", evalRPN(["5", "3", "-"]), 2);

test("Multiplication", evalRPN(["4", "6", "*"]), 24);

test("Division truncates toward zero", evalRPN(["7", "3", "/"]), 2);

test("Negative division truncates toward zero", evalRPN(["-7", "3", "/"]), -2);

test("Mixed operations", evalRPN(["3", "4", "+", "2", "*", "7", "/"]), 2);