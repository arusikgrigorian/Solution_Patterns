function isPalindrome(s: string): boolean {
  const lowercaseString = s.toLowerCase();
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (lowercaseString[start] !== lowercaseString[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}
