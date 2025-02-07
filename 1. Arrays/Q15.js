// Move Zeroes To End

function moveZeroes(arr) {
  let lastNonZeroFoundAt = 0;

  // Traverse the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // Swap the current element with the element at lastNonZeroFoundAt
      [arr[i], arr[lastNonZeroFoundAt]] = [arr[lastNonZeroFoundAt], arr[i]];
      lastNonZeroFoundAt++;
    }
  }
}

function main() {
  // Read number of test cases
  let t = parseInt(readLine());

  while (t-- > 0) {
    // Read the size of the array
    let n = parseInt(readLine());

    // Read the array
    let arr = readLine().split(" ").map(Number);

    // Call the function to move zeroes
    moveZeroes(arr);

    // Output the result
    console.log(arr.join(" "));
  }
}
