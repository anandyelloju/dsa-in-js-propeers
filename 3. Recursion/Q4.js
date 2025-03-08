// Find K-th Element

function findKthElement(arr1, arr2, k) {
  let mergedArray = [...arr1, ...arr2];
  mergedArray.sort((a, b) => a - b);
  return mergedArray[k - 1];
}
