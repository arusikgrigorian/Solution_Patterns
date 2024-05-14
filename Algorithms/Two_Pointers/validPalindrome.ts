function isPalindrome(str: string): boolean {
  const lowercaseString = str.toLowerCase();
  let start = 0;
  let end = lowercaseString.length - 1;

  while (start <= end) {
    if (lowercaseString[start] !== lowercaseString[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

export default isPalindrome;
