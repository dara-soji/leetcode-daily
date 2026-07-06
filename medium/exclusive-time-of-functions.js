/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const ans = new Array(n).fill(0);
  const stack = [];

  let prevTime = 0;

  for (const item of logs) {
    const [idString, action, timeString] = item.split(":");

    const id = Number(idString);
    const time = Number(timeString);

    if (action === "start") {
      if (stack.length > 0) {
        const currentRunningId = stack[stack.length - 1];
        ans[currentRunningId] += time - prevTime;
      }

      stack.push(id);
      prevTime = time;
    } else {
      const finishedId = stack.pop();

      ans[finishedId] += time - prevTime + 1;

      prevTime = time + 1;
    }
  }

  return ans;
};

module.exports = exclusiveTime