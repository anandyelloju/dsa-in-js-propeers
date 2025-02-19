// Set Matrix Zeros

function setZeros(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let zeroRows = new Set();
  let zeroColumns = new Set();

  // Identify all rows and columns that need to be set to 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroColumns.add(j);
      }
    }
  }

  // Set the identified rows and columns to 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (zeroRows.has(i) || zeroColumns.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

function main() {
  let T = parseInt(readLine()); // Number of test cases

  for (let t = 0; t < T; t++) {
    let dimensions = readLine().split(" ").map(Number);
    let n = dimensions[0];
    let m = dimensions[1];

    let matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push(readLine().split(" ").map(Number));
    }

    let result = setZeros(matrix);

    for (let i = 0; i < n; i++) {
      console.log(result[i].join(" "));
    }
  }
}
