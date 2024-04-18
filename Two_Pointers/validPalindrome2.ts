function validPalindrome2(str: string, count = 0): boolean {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) {
      if (count === 1) {
        return false;
      }

      count++;

      return validPalindrome2(str.slice(start + 1, end + 1), count) || validPalindrome2(str.slice(start, end), count);
    }

    start++;
    end--;
  }

  return true;
}
