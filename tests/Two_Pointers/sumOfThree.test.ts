import sumOfThree from '../../Algorithms/Two_Pointers/sumOfThree';

type Item = {
  label: string;
  numbers: Array<number>;
  target: number;
};

const firstList: Array<Item> = [
  { label: '[1, 3, 7, 2, 15, 8] has 3 numbers to sum 23', numbers: [1, 3, 7, 2, 15, 8], target: 23 },
  { label: '[8, 34, 2, 6, 3, 1] has 3 numbers to sum 10', numbers: [8, 34, 2, 6, 3, 1], target: 10 },
];

const secondList: Array<Item> = [
  { label: '[8, 34, -2, 6, -3, 1] does not have 3 numbers to sum 45', numbers: [], target: 45 },
  { label: '[3, 6, 9, 2, 8, 4] does not have 3 numbers to sum 12', numbers: [], target: 12 },
];

firstList.forEach(({ label, numbers, target }) => {
  test(label, () => {
    expect(sumOfThree(numbers, target)).toBe(true);
  });
});

secondList.forEach(({ label, numbers, target }) => {
  test(label, () => {
    expect(sumOfThree(numbers, target)).toBe(false);
  });
});
