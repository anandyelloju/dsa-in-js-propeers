// Sum Of Zeroes

function coverageOfMatrix(mat) {
  const m = mat.length;
  const n = mat[0].length;

  // Directions for checking adjacent cells: up, down, left, right
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  let sum = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        // Check all four directions
        for (const [dx, dy] of directions) {
          const ni = i + dx;
          const nj = j + dy;

          if (ni >= 0 && ni < m && nj >= 0 && nj < n && mat[ni][nj] === 1) {
            sum++;
          }
        }
      }
    }
  }

  return sum;
}

function main() {
  const T = parseInt(readLine().trim());
  for (let t = 0; t < T; t++) {
    const [N, M] = readLine().trim().split(" ").map(Number);
    const matrix = [];

    for (let i = 0; i < N; i++) {
      const row = readLine().trim().split(" ").map(Number);
      matrix.push(row);
    }

    const result = coverageOfMatrix(matrix);
    console.log(result);
  }
}
