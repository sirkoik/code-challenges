function toCamelCase(str) {
  if (str === '') {
    return '';
  }

  return str
    .split(/[_-]/g)
    .map((word, i) => {
      if (i === 0) {
        return word;
      }

      if (word.length === 1 && i !== 0) {
        return word.toUpperCase();
      }

      const firstUpper = word[0].toUpperCase();
      return firstUpper + word.substr(1);
    })
    .join('');
}
