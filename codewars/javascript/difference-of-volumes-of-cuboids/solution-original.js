function findDifference(a, b) {
  return Math.abs(
    a.reduce((prev, cur) => prev * cur) - b.reduce((prev, cur) => prev * cur)
  );
}
