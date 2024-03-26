export function sumOfThree(array: Array<number>, target: number): boolean {
  const copiedArray = array.slice(0);
  const sortedArray = copiedArray.sort();

  for (let i = 0; i < sortedArray.length - 2; i++) {
    let low = i + 1;
    let high = sortedArray.length - 1;

    while (low < high) {
      if (sortedArray[i] + sortedArray[low] + sortedArray[high] === target) {
        return true;
      } else if (sortedArray[i] + sortedArray[low] + sortedArray[high] < target) {
        low++;
      } else {
        high--;
      }
    }
  }

  return false;
}
