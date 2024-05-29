import findMaxSlidingWindow from '../../Algorithms/Sliding_Window/maxInWindow';

type Item = {
  nums: Array<number>;
  window: number;
  result: Array<number>;
};

const list: Array<Item> = [
  { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], window: 3, result: [3, 4, 5, 6, 7, 8, 9, 10] },
  { nums: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], window: 4, result: [3, 3, 3, 3, 3, 3, 3] },
  { nums: [4, 5, 6, 1, 2, 3], window: 1, result: [4, 5, 6, 1, 2, 3] },
];

list.forEach(({ nums, window, result }) => {
  test(nums.toString(), () => {
    expect(findMaxSlidingWindow(nums, window)).toEqual(result);
  });
});
