// revised: This uses regex and came close to the "clever" solution on Codewars
// Matches groups of two characters.

function solution(str) {
  const sol = str.match(/.{2}?/g) || [];
  if (str.length % 2) sol.push(str[str.length - 1] + '_');
  return sol;
}
