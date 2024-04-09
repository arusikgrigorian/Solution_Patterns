import sortNumbers from '../Two_Pointers/sortNumbers';

type Item = {
  label: string;
  numbers: Array<number>;
  result: Array<number>;
};

const numbers: Array<Item> = [
  { label: '[0, 2, 1, 2, 1] -> [0, 1, 1, 2, 2]', numbers: [0, 2, 1, 2, 1], result: [0, 1, 1, 2, 2] },
  {
    label: '[2, 1, 2, 0, 1, 0, 0, 2, 1] -> [0, 0, 0, 1, 1, 1, 2, 2, 2]',
    numbers: [2, 1, 2, 0, 1, 0, 0, 2, 1],
    result: [0, 0, 0, 1, 1, 1, 2, 2, 2],
  },
];

numbers.forEach(({ label, numbers, result }) => {
  test(label, () => {
    expect(sortNumbers(numbers)).toEqual(result);
  });
});
