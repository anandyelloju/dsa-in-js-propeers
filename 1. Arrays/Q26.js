// Count all sub-arrays having sum divisible by k

function subArrayCount(arr, k) {
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    // Get the remainder of the current prefix sum when divided by k
    let remainder = prefixSum % k;

    // Adjust remainder to be positive if it is negative
    if (remainder < 0) {
      remainder += k;
    }

    // If this remainder has been seen before, it means there is a subarray sum divisible by k
    if (prefixSumCount.has(remainder)) {
      count += prefixSumCount.get(remainder);
    }

    // Update the count of this remainder in the map
    prefixSumCount.set(remainder, (prefixSumCount.get(remainder) || 0) + 1);
  }

  return count;
}
