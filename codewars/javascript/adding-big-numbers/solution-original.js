// function add(a, b) {
//   return (Number(a) + Number(b)).toString(); // Fix me!
// }

function add(a, b) {
  // pad shorter number so that it lines up.
  let padArr = pad(a, b);
  //console.log(padArr);
  a = padArr[0];
  b = padArr[1];

  let carryover = 0;
  let result = '';

  for (let j = a.length - 1; j >= -1; j--) {
    let num1 = parseInt(a[j]) || 0;
    let num2 = parseInt(b[j]) || 0;

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

  let aShorter = a.length < b.length;
  let padDiff = Math.abs(a.length - b.length);

  for (let x = 0; x < padDiff; x++) {
    if (aShorter) a = '0' + a;
    if (!aShorter) b = '0' + b;
  }

  return [a, b];
}
