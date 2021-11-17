// more efficient two-line solution
function sumTwoSmallestNumbers(numbers) {
  const a = numbers.sort((a, b) => a - b);
  return a[0] + a[1];
}
