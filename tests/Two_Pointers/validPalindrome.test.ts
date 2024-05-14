import isPalindrome from '../../Algorithms/Two_Pointers/validPalindrome';

type Item = {
  label: string;
  word: string;
};

const palindromes: Array<Item> = [
  { label: 'abba is palindrome', word: 'abba' },
  { label: 'kayak is palindrome', word: 'kayak' },
  { label: 'repaper is palindrome', word: 'repaper' },
  { label: 'noon is palindrome', word: 'noon' },
];

const nonPalindromes: Array<Item> = [
  { label: 'hello is not palindrome', word: 'hello' },
  { label: 'book is not palindrome', word: 'book' },
  { label: 'playground is not palindrome', word: 'playground' },
  { label: 'bird  rib is not palindrome', word: 'bird  rib' },
];

palindromes.forEach(({ label, word }) => {
  test(label, () => {
    expect(isPalindrome(word)).toBe(true);
  });
});

nonPalindromes.forEach(({ label, word }) => {
  test(label, () => {
    expect(isPalindrome(word)).toBe(false);
  });
});
