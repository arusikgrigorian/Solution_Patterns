function isPalindrome3(str: string): boolean {
  var start = 0;
  var end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) {
      var rightStr = validPalindrome(str, start + 1, end);
      var leftStr = validPalindrome(str, start, end - 1);

      return rightStr || leftStr;
    }

    start++;
    end--;
  }

  return true;
}

function validPalindrome(str: string, start: number, end: number): boolean {
  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

export default isPalindrome3;
