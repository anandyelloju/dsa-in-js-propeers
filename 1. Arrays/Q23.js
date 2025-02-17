// Check subsequence

function isSubSequence(str1, str2) {
  let i = 0; // Pointer for str1
  let j = 0; // Pointer for str2

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }

  // If we've traversed all of str1, then it's a subsequence of str2
  return i === str1.length ? "True" : "False";
}

function main() {
  let T = parseInt(readLine()); // Read number of test cases

  for (let t = 0; t < T; t++) {
    let str1 = readLine();
    let str2 = readLine();

    let result = isSubSequence(str1, str2);

    // Output the result
    console.log(result);
  }
}
