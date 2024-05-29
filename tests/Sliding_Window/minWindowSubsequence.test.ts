import minWindowSubsequence from '../../Algorithms/Sliding_Window/minWindowSubsequence';

type Item = {
  str: string;
  substr: string;
  result: string;
};

const list: Array<Item> = [
  { str: 'abcdebdde', substr: 'bde', result: 'bcde' },
  { str: 'fgrqsqsnodwmxzkzxwqegkndaa', substr: 'kzed', result: 'kzxwqegknd' },
  { str: 'afgegrwgwga', substr: 'aa', result: 'afgegrwgwga' },
];

list.forEach(({ str, substr, result }) => {
  test(str, () => {
    expect(minWindowSubsequence(str, substr)).toBe(result);
  });
});
