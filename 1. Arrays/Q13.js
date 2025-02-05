// Intersection Of Two Sorted Arrays

function findIntersection(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  // Iterate through both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      // Found a common element
      result.push(arr1[i]);
      i++;
      j++;
    }
  }

  return result;
}

function main() {
  let t = parseInt(readLine());
  while (t--) {
    let [n, m] = readLine().split(" ").map(Number);
    let arr1 = readLine().split(" ").map(Number);
    let arr2 = readLine().split(" ").map(Number);

    let result = findIntersection(arr1, arr2);
    console.log(result.length > 0 ? result.join(" ") : "-1");
  }
}
