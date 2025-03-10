// Binary strings with no consecutive 1s.

function generateString(N) {
  function helper(current, length) {
    if (length === N) {
      return [current];
    }
    let result = [];
    // Always append '0' since there is no restriction on it
    result = result.concat(helper(current + "0", length + 1));
    // Append '1' only if the last character is not '1'
    if (current.length === 0 || current[current.length - 1] !== "1") {
      result = result.concat(helper(current + "1", length + 1));
    }
    return result;
  }

  // Initialize the recursive function
  return helper("", 0);
}

function main() {
  var N = parseInt(readLine().trim());
  let binaryStrings = generateString(N);
  console.log(binaryStrings.join(" "));
}
