export function findSumOfThree(array: Array<number>, target: number): boolean {
  const sortedArray = array.sort();
  let isTripleFound = false;

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1, k = i + 2; k < sortedArray.length; j++, k++) {
      if (sortedArray[i] + sortedArray[j] + sortedArray[k] === target) {
        isTripleFound = true;
      }
    }
  }

  return isTripleFound;
}
