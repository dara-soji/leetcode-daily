const finalPrices = require("../easy/final-prices-with-a-special-discount-in-a-shop");

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

test("Example 1", finalPrices([8, 4, 6, 2, 3]), [4, 2, 4, 2, 3]);

test("Example 2", finalPrices([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);

test("Example 3", finalPrices([10, 1, 1, 6]), [9, 0, 1, 6]);

test("Single item", finalPrices([5]), [5]);

test("All same prices", finalPrices([5, 5, 5]), [0, 0, 5]);

test("Descending prices", finalPrices([9, 8, 7, 6]), [1, 1, 1, 6]);

test("Discount is not always the smallest later price", finalPrices([10, 7, 8, 3]), [
  3, 4, 5, 3,
]);

test("Mixed prices", finalPrices([2, 3, 1, 2, 4, 2]), [
  1, 2, 1, 0, 2, 2,
]);