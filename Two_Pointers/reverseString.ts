function reverseWords(str: string): string {
  let reversedString = reverseString(str, 0, str.length - 1);
  let start = 0;
  let end = 0;

  while (end <= reversedString.length) {
    if (
      (end === 0 && reversedString[end] === ' ' && reversedString[end + 1] !== ' ') ||
      (end === reversedString.length - 1 && reversedString[end] === ' ')
    ) {
      reversedString = removeSpace(reversedString, end);
    }

    if (reversedString[end] === ' ' && reversedString[end + 1] === ' ') {
      reversedString = removeSpace(reversedString, end);
      end--;
    }

    if (reversedString[end] === ' ' || end === reversedString.length) {
      reversedString = reverseString(reversedString, start, end - 1);
      start = end + 1;
    }

    end++;
  }

  return reversedString;
}

function reverseString(str: string, start: number, end: number): string {
  let splittedString = str.split('');

  while (start < end) {
    let temp = splittedString[start];

    splittedString[start] = splittedString[end];
    splittedString[end] = temp;

    start++;
    end--;
  }

  return splittedString.join('');
}

function removeSpace(str: string, end: number): string {
  let splittedString = str.split('');

  splittedString.splice(end, 1);

  return splittedString.join('');
}
