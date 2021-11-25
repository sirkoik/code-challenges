function rgb(r, g, b) {
  let hexColor = '';

  for (d of [r, g, b]) {
    if (d < 0) {
      d = 0;
    }

    if (d > 255) {
      d = 255;
    }

    let dH = d.toString(16).toUpperCase();
    if (dH.length < 2) dH = '0' + dH;

    hexColor += dH;
  }

  return hexColor;
}
