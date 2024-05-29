function maxRepeatingCharacterReplacement(s: string, k: number) {
  let start = 0;
  let end = 0;
  let charFrequency: Record<string, number> = {};
  let maxFrequency = 0;
  let result = 0;

  while (end < s.length) {
    if (s[end] in charFrequency) {
      charFrequency[s[end]] += 1;
    } else {
      charFrequency[s[end]] = 1;
    }

    maxFrequency = Math.max(maxFrequency, charFrequency[s[end]]);

    if (end - start + 1 - maxFrequency <= k) {
      result = Math.max(result, s.slice(start, end + 1).length);
    } else {
      charFrequency[s[start]] -= 1;
      start++;
    }

    end++;
  }

  return result;
}

export default maxRepeatingCharacterReplacement;
