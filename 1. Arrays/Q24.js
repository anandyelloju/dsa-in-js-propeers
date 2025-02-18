// Inplace rotate matrix 90 degree

function inplaceRotate(arr, n) {
  // Create an empty matrix of size n x n
  let mat = new Array(n).fill(0).map(() => new Array(n).fill(0));

  // Reverse each row of the original matrix
  for (let i = 0; i < n; i++) {
    arr[i].reverse();
  }

  // Rotate the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      mat[j][i] = arr[i][j];
    }
  }

  return mat;
}

function main() {
  let T = parseInt(readLine()); // Read number of test cases

  for (let t = 0; t < T; t++) {
    let n = parseInt(readLine()); // Read size of the array
    let arr = [];

    // Read the matrix
    for (let i = 0; i < n; i++) {
      arr.push(readLine().split(" ").map(Number));
    }

    let result = inplaceRotate(arr, n);

    // Output the rotated matrix
    for (let i = 0; i < n; i++) {
      console.log(result[i].join(" "));
    }
  }
}
