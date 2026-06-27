/**
 * Problem: How Many Numbers Are Smaller Than the Current Number
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 *
 * Approach:
 * Since nums[i] is between 0 and 100, use a counting array.
 *
 * First, count how many times each number appears.
 * Then, convert the count array so count[i] tells us how many numbers
 * are smaller than i.
 * Finally, replace each number with the count of smaller numbers.
 *
 * Time Complexity: O(n + 101) => O(n)
 * Space Complexity: O(101) => O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const count = new Array(101).fill(0);

  for (const num of nums) {
    count[num]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  const result = [];

  for (const num of nums) {
    if (num === 0) {
      result.push(0);
    } else {
      result.push(count[num - 1]);
    }
  }

  return result;
};

module.exports = smallerNumbersThanCurrent;