function alignRight(text, width) {
  const t = text.split(' ');
  let line = '',
    output = '';

  for (let i = 0; i < t.length; i++) {
    const newWord = line == '' ? t[i] : ' ' + t[i];
    const newLength = newWord.length;

    if (line.length + newLength > width) {
      output += ' '.repeat(width - line.length) + line + '\n';
      line = t[i];
      if (i == t.length - 1) {
        output += ' '.repeat(width - newWord.length) + newWord;
      }
    } else {
      line += newWord;
      if (i == t.length - 1) {
        output += ' '.repeat(width - line.length) + line;
      }
    }
  }

  return output;
}
