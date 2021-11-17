function spinWords(words) {
  return words
    .split(' ')
    .map((word) => {
      return word.length < 5 ? word : word.split('').reverse().join('');
    })
    .join(' ');
}
