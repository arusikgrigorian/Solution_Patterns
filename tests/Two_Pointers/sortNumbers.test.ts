import sortNumbers from '../../Algorithms/Two_Pointers/sortNumbers';

type Item = {
  label: string;
  numbers: Array<number>;
  result: Array<number>;
};

const list: Array<Item> = [
  { label: '[0, 2, 1, 2, 1] -> [0, 1, 1, 2, 2]', numbers: [0, 2, 1, 2, 1], result: [0, 1, 1, 2, 2] },
  {
    label: '[2, 1, 2, 0, 1, 0, 0, 2, 1] -> [0, 0, 0, 1, 1, 1, 2, 2, 2]',
    numbers: [2, 1, 2, 0, 1, 0, 0, 2, 1],
    result: [0, 0, 0, 1, 1, 1, 2, 2, 2],
  },
];

list.forEach(({ label, numbers, result }) => {
  test(label, () => {
    expect(sortNumbers(numbers)).toEqual(result);
  });
});
