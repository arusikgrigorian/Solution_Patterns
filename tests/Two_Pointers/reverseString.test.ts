import reverseWords from '../../Algorithms/Two_Pointers/reverseString';

type Item = {
  label: string;
  sentence: string;
  result: string;
};

const sentences: Array<Item> = [
  { label: 'hello world -> world hello', sentence: 'hello world', result: 'world hello' },
  { label: '" blue sky above " -> above sky blue', sentence: ' blue sky above ', result: 'above sky blue' },
  { label: '"Birds   chirping  " -> chirping Birds', sentence: 'Birds   chirping  ', result: 'chirping Birds' },
  {
    label: '"   Flowers    blooming    beautifully   " -> beautifully blooming Flowers',
    sentence: '   Flowers    blooming    beautifully   ',
    result: 'beautifully blooming Flowers',
  },
];

sentences.forEach(({ label, sentence, result }) => {
  test(label, () => {
    expect(reverseWords(sentence)).toBe(result);
  });
});
