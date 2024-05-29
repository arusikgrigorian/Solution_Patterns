import maxRepeatingCharacterReplacement from '../../Algorithms/Sliding_Window/maxRepeatingChar';

type Item = {
  str: string;
  replacementSize: number;
  result: number;
};

const list: Array<Item> = [
  { str: 'aaacbbbaabab', replacementSize: 2, result: 6 },
  { str: 'dippitydip', replacementSize: 4, result: 6 },
  { str: 'aaaaaaaaaa', replacementSize: 2, result: 10 },
];

list.forEach(({ str, replacementSize, result }) => {
  test(str, () => {
    expect(maxRepeatingCharacterReplacement(str, replacementSize)).toBe(result);
  });
});
