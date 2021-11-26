snail = function (array) {
  // This function winds through the array in a snail-like pattern.
  // It keeps track of turn count, and uses vectors to make it easier
  // to jump across different sub-arrays.

  const vec = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const l = array[0].length * array.length;
  let per = array[0].length - 1;
  let turns = 0;
  let line = 0;
  let dir = vec[0];

  let x = 0;
  let y = 0;
  const snail = [];

  for (let i = 0; i < l; i++) {
    if (turns == 3 && line == per - 1) {
      turns = 0;
      line = 0;
      per = per - 2;
      dir = vec[turns];
    } else {
      if (line < per) {
        line++;
      } else {
        line = 1;
        turns++;
        dir = vec[turns];
      }
    }

    snail.push(array[x][y]);

    x = x + dir[0];
    y = y + dir[1];
  }

  return snail;
};
