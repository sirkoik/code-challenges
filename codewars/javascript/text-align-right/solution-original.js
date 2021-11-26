function alignRight(text, width) {
  t = text.split(' ');

  let line = '';
  let output = '';
  for (let i = 0; i < t.length; i++) {
    const newWord = line == '' ? t[i] : ' ' + t[i];
    const newLength = newWord.length;

    if (line.length + newLength > width) {
      output += pad(line, width) + '\n';
      line = t[i];
      if (i == t.length - 1) {
        output += pad(newWord, width);
      }
    } else {
      line += newWord;
      if (i == t.length - 1) {
        output += pad(line, width);
      }
    }
  }

  return output;
}

function pad(text, width) {
  const padAmt = width - text.length;
  if (padAmt <= 0) return text;

  for (let i = 0; i < padAmt; i++) {
    text = ' ' + text;
  }

  return text;
}
