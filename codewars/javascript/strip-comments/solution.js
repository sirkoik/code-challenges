function solution(input, markers) {
  const re = new RegExp(`^[^${markers.join('')}]*(?= )`, 'gm');
  return input.match(re).join('\n');
}
