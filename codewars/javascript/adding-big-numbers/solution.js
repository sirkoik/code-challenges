// function add(a, b) {
//   return (Number(a) + Number(b)).toString(); // Fix me!
// }

function add(a, b) {
  // pad shorter number so that it lines up.
  const padArr = pad(a, b);
  const aPad = padArr[0];
  const bPad = padArr[1];

  let carryover = 0;
  let result = '';

  for (let i = aPad.length - 1; i >= -1; i--) {
    const num1 = parseInt(aPad[i]) || 0;
    const num2 = parseInt(bPad[i]) || 0;

    let sum = carryover + num1 + num2;

    // if the sum is greater than 9, save the last place and keep the rest as the carryover.
    if (sum > 9) {
      let sumArr = (sum + '').split('');
      sum = parseInt(sumArr.pop());
      carryover = parseInt(sumArr.join(''));
    } else {
      // if the sum is 9 or less, no carryover, and the sum is the same as the last place.
      carryover = 0;
    }

    result = sum + result;
  }

  return result.substr(0, 1) === '0' ? result.substr(1) : result;
}

function pad(a, b) {
  if (a.length == b.length) {
    return [a.split(''), b.split('')];
  }

  const aShorter = a.length < b.length;
  const padDiff = Math.abs(a.length - b.length);

  let aPad = a;
  let bPad = b;

  for (let x = 0; x < padDiff; x++) {
    if (aShorter) {
      aPad = '0' + aPad;
    }

    if (!aShorter) {
      bPad = '0' + bPad;
    }
  }

  return [aPad, bPad];
}
