// This solution takes advantage of the fact that the regex only matches groups of two.
// So it does not match the _ when the new string has an odd number of characters (even number of characters in the original string).

function solution(str) {
  return (str + '_').match(/.{2}?/g) || [];
}
