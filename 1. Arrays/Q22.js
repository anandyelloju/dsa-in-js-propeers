// Moore’s Voting Algorithm/

function findMajorityElement(arr, n) {
  let candidate = null;
  let count = 0;

  // Phase 1: Find a candidate
  for (let i = 0; i < n; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Phase 2: Verify the candidate
  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  // If candidate occurs more than floor(n/2) times, return it, otherwise return -1
  if (count > Math.floor(n / 2)) {
    return candidate;
  } else {
    return -1;
  }
}

function main() {
  let T = parseInt(readLine()); // Read number of test cases

  for (let t = 0; t < T; t++) {
    let n = parseInt(readLine()); // Read size of the array
    let arr = readLine().split(" ").map(Number); // Read the array

    let result = findMajorityElement(arr, n);

    // Output the result
    console.log(result);
  }
}
