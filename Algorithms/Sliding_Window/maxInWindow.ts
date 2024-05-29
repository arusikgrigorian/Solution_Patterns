export function findMaxSlidingWindow(nums: Array<number>, w: number) {
  let start = 0;
  let result = [];

  for (let i = 0; i <= nums.length; i++) {
    if (i - start === w) {
      let sliced = nums.slice(start, i);
      let max = Math.max(...sliced);

      result.push(max);
      start++;
    }
  }

  return result;
}

export default findMaxSlidingWindow;
