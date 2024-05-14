function sortNumbers(array: Array<number>): Array<number> {
  let start = 0;
  let current = 0;
  let end = array.length - 1;
  let temp = 0;

  while (current <= end) {
    if (array[current] === 0) {
      if (array[start] !== 0) {
        temp = array[start];
        array[start] = array[current];
        array[current] = temp;
      }

      start++;
      current++;
    } else if (array[current] === 1) {
      current++;
    } else {
      if (array[end] !== 2) {
        temp = array[end];
        array[end] = array[current];
        array[current] = temp;
      }

      end--;
    }
  }

  return array;
}

export default sortNumbers;
