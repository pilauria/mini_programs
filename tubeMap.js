// Lines
const lines = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  six: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};

const planTrip = (startLine, startStation, endLine, endStation) => {
  let totalStops = 0;
  let message = '';

  const startIndex = lines[startLine].indexOf(startStation); // index of start station on the start line
  const endIndex = lines[endLine].indexOf(endStation); // index of end station on the end line
  const unionSquareIdxStartLine = lines[startLine].indexOf('Union Square'); // Union Square's index on the start line
  const unionSquareIdxEndLine = lines[endLine].indexOf('Union Square'); // Union Square's index on the end line

  // if the end stop is on the same line
  if (startLine === endLine) {
    totalStops += Math.abs(endIndex - startIndex);
    message += `Travel through the following stops on the ${startLine} line: ${lines[
      startLine
    ]
      .slice(Math.min(startIndex, endIndex), Math.max(startIndex, endIndex) + 1)
      .join(', ')} (${totalStops} stops)`;
  } else {
    // if we have to change lines, first go to union square on start line
    let startLineStops = Math.abs(startIndex - unionSquareIdxStartLine) + 1;
    message += `Travel through the following stops on the ${startLine} line: ${lines[
      startLine
    ]
      .slice(
        Math.min(startIndex, unionSquareIdxStartLine),
        Math.max(startIndex, unionSquareIdxStartLine) + 1
      )
      .join(', ')} (${startLineStops} stops).
    Change at Union Square.`;
    // travel from union square to the end station
    let endLineStops = Math.abs(endIndex - unionSquareIdxEndLine) + 1;
    message += `\nTravel through the following stops on the ${endLine} line: ${lines[
      endLine
    ]
      .slice(
        Math.min(endIndex, unionSquareIdxEndLine),
        Math.max(endIndex, unionSquareIdxEndLine) + 1
      )
      .join(', ')} (${endLineStops} stops).
    `;
  }
  return message;
};

// Call function and pass (startLine, startStation, endLine, endStation)
console.log(planTrip('six', '8th', 'L', '6th'));

// backlog: prompt user for startStation/endStation
// input validation


git remote add origin https://github.com/pilauria/small_programs.git
git branch -M main
git push -u origin main