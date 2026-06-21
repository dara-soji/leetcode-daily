/**
 * Problem: Valid Parentheses
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/valid-parentheses/
 *
 * Description:
 * Given a string containing only the characters:
 * '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * A string is valid if:
 * 1. Every opening bracket has a matching closing bracket.
 * 2. Brackets are closed in the correct order.
 * 3. Every closing bracket matches the most recent unmatched opening bracket.
 *
 * Approach:
 * Use a stack.
 *
 * When we see an opening bracket, we push it into the stack.
 * When we see a closing bracket, we check whether it matches
 * the most recent opening bracket at the top of the stack.
 *
 * If it does not match, return false.
 * At the end, the stack must be empty for the string to be valid.
 *
 * Time Complexity: O(n)
 * - We loop through the string once.
 *
 * Space Complexity: O(n)
 * - In the worst case, all characters are opening brackets and are stored in the stack.
 */

function isValid(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = isValid;