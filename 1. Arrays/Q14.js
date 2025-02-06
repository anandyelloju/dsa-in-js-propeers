// Maximum Subarray Sum

function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < n; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}