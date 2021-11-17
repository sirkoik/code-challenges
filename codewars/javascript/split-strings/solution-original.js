// original: this solution uses arrays
function solution(str) {
  const arr = [];
  for (let x = 1; x <= str.length; x += 2) {
    const prev = str[x - 1];
    const cur = str[x] || "_";
    arr.push(prev + cur);
  }
  return arr;
}
