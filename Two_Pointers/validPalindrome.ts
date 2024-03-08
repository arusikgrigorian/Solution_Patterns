function isPalindrome(s: string): boolean {
  let start = 0;
  let end = s.length - 1;
  let isStringPalindrome = true;
  const lowercaseString = s.toLowerCase();

  while (start <= end) {
    if (lowercaseString[start] !== lowercaseString[end]) {
      isStringPalindrome = false;
      break;
    }

    start++;
    end--;
  }

  return isStringPalindrome;
}
