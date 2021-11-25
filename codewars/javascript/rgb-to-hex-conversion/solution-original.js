function rgb(r, g, b) {
  if (r < 0) r = 0;
  if (g < 0) g = 0;
  if (b < 0) b = 0;

  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;

  let r1 = r.toString(16).toUpperCase();
  if (r1.length < 2) r1 = '0' + r1;

  let g1 = g.toString(16).toUpperCase();
  if (g1.length < 2) g1 = '0' + g1;

  let b1 = b.toString(16).toUpperCase();
  if (b1.length < 2) b1 = '0' + b1;

  return r1 + g1 + b1;
}
