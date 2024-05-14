function findRepeatedSequences(str: string, k: number): Array<string> {
  let left = 0;
  let right = 0;
  let container: Record<string, number> = {};
  let result: Array<string> = [];

  while (right <= str.length) {
    if (right - left !== k) {
      right++;
    } else {
      let substring = str.slice(left, right);

      if (substring in container) {
        container[substring] = container[substring] + 1;
      } else {
        container[substring] = 1;
      }

      left++;
    }
  }

  for (let key in container) {
    if (container[key] > 1) {
      result.push(key);
    }
  }

  return result;
}

export default findRepeatedSequences;
