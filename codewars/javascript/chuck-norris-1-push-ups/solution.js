function chuckPushUps(string) {
  if (typeof string !== 'string' || string === '') {
    return 'FAIL!!';
  }

  return (
    Math.max(
      ...string
        .replace(/[^01 ]/gi, '')
        .split(/\s+/)
        .map(binStr => parseInt(binStr, 2) || 0)
    ) || 'CHUCK SMASH!!'
  );
}
