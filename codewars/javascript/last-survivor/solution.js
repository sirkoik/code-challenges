function lastSurvivor(letters, coords) {
  lArr = letters.split('');
  coords.forEach((item, index) => lArr.splice(item, 1));
  return lArr.join('');
}
