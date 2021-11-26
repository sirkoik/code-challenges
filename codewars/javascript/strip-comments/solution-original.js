function solution(input, markers) {
  const lines = input.split('\n');
  const outArr = [];

  for (line of lines) {
    let earliestMarker = line.length;

    for (marker of markers) {
      const markerIndex = line.indexOf(marker);
      if (markerIndex !== -1 && markerIndex < earliestMarker) {
        earliestMarker = markerIndex;
      }
    }

    const lineWoComments = line.substr(0, earliestMarker);
    outArr.push(lineWoComments.trim());
  }

  return outArr.join('\n');
}
