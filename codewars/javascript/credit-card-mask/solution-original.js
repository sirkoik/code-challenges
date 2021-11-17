// return masked string
function maskify(cc) {
  return (cc + "")
    .split("")
    .map((currentValue, i, arr) => {
      return i < arr.length - 4 ? "#" : currentValue;
    })
    .join("");
}
