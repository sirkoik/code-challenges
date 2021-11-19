function chuckPushUps(string) {
  if (typeof string !== 'string' || string.length === 0) return 'FAIL!!';

  const nums = [];

  string.split(' ').map((item) => {
    if (item.match(/[0-1]+/g)) nums.push(item.match(/[0-1]+/g).join(''));
  });

  if (nums.length === 0) return 'CHUCK SMASH!!';

  let max = 0;
  nums.map((num) => {
    num = parseInt(num, 2);

    if (num > max) max = num;
  });

  return max;
}
