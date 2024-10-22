// Equilibrium Index

function findEquilibriumIndex(arr) {
  const N = arr.length;

  // To handle edge cases
  if (N === 0) return -1;
  if (N === 1) return 0;

  let totalSum = arr.reduce((acc, num) => acc + num, 0);

  let leftSum = 0;
  for (let i = 0; i < N; ++i) {
    // totalSum now represents the sum to the right of index i
    totalSum -= arr[i];

    if (leftSum === totalSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1; // If no equilibrium index is found
}

function main() {
  const test_cases = parseInt(readLine().trim(), 10);
  for (let i = 0; i < test_cases; i++) {
    let arr_len = parseInt(readLine().trim(), 10);
    let arr = readLine().trim().split(" ").map(Number);
    console.log(findEquilibriumIndex(arr, arr_len));
  }
}
