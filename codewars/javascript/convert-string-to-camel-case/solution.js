function toCamelCase(str) {
  return str.replace(/([a-z]+)+[_-]*/gi, (match, p1, offset) => {
    return offset === 0 ? p1 : p1[0].toUpperCase() + p1.substr(1);
  });
}
