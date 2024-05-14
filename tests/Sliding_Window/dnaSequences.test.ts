import findRepeatedSequences from '../../Algorithms/Sliding_Window/dnaSequences';

type Item = {
  dnaString: string;
  length: number;
  result: Array<string>;
};

const dnaStrings: Array<Item> = [
  { dnaString: 'AAAAACCCCCAAAAACCCCCC', length: 8, result: ['AAAAACCC', 'AAAACCCC', 'AAACCCCC'] },
  { dnaString: 'ATATATATATATATAT', length: 6, result: ['ATATAT', 'TATATA'] },
  { dnaString: 'GGGGGGGGGGGGGGGGGGGGGGGGG', length: 9, result: ['GGGGGGGGG'] },
];

dnaStrings.forEach(({ dnaString, length, result }) => {
  test(dnaString, () => {
    expect(findRepeatedSequences(dnaString, length)).toEqual(result);
  });
});
