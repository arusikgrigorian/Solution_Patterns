function isPalindrome(s: string): boolean {
  const lowercaseString = s.toLowerCase();
  let isStringPalindrome = true;
  let start = 0;
  let end = s.length - 1;

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
