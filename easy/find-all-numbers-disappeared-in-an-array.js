/**
 * Problem: Find All Numbers Disappeared in an Array
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 *
 * Approach:
 * Add all numbers into a Set.
 * Then loop from 1 to nums.length.
 * If a number is not in the Set, it disappeared from the array,
 * so we add it to the answer.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const mySet = new Set();

  for (const num of nums) {
    mySet.add(num);
  }

  const ans = [];
  let n = 1;

  while (n <= nums.length) {
    if (!mySet.has(n)) {
      ans.push(n);
    }

    n++;
  }

  return ans;
};

module.exports = findDisappearedNumbers;