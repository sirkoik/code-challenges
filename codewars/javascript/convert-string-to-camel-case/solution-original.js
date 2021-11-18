function toCamelCase(str) {
  return str
    .replace(/-|_/g, ' ')
    .split(' ')
    .reduce((prev, cur) => {
      const curEnd = cur.length > 1 ? cur.substr(1) : '';
      return prev + cur[0].toUpperCase() + curEnd;
    });
}
