export function minWindowSubsequence(str1: string, str2: string) {
  let indexStr1 = 0;
  let indexStr2 = 0;
  let start = 0;
  let end = 0;
  let min = Infinity;
  let result = '';

  while (indexStr1 < str1.length) {
    if (str1[indexStr1] === str2[indexStr2]) {
      if (indexStr2 === 0) {
        start = indexStr1;
      }

      indexStr2++;

      if (indexStr2 === str2.length) {
        end = indexStr1;
        let currentSubstr = str1.slice(start, end + 1);

        if (currentSubstr.length < min) {
          min = currentSubstr.length;
          result = currentSubstr;
        }

        indexStr1 = start;
        indexStr2 = 0;
      }
    }

    indexStr1++;
  }

  return result;
}

export default minWindowSubsequence;
