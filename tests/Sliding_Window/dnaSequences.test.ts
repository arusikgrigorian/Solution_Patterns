import findRepeatedSequences from '../../Algorithms/Sliding_Window/dnaSequences';

type Item = {
  dnaString: string;
  window: number;
  result: Array<string>;
};

const list: Array<Item> = [
  { dnaString: 'AAAAACCCCCAAAAACCCCCC', window: 8, result: ['AAAAACCC', 'AAAACCCC', 'AAACCCCC'] },
  { dnaString: 'ATATATATATATATAT', window: 6, result: ['ATATAT', 'TATATA'] },
  { dnaString: 'GGGGGGGGGGGGGGGGGGGGGGGGG', window: 9, result: ['GGGGGGGGG'] },
];

list.forEach(({ dnaString, window, result }) => {
  test(dnaString, () => {
    expect(findRepeatedSequences(dnaString, window)).toEqual(result);
  });
});
