// Make Unique Array

function minElementsToRemove(arr) {
    return arr.length - new Set(arr).size;
}

function main() {
  const test_cases = parseInt(readLine().trim());
  for (let i = 0; i < test_cases; i++) {
    let arr_len = parseInt(readLine().trim());
    let arr = readLine().trim().split(" ").map(Number);
    console.log(minElementsToRemove(arr));
  }
}
