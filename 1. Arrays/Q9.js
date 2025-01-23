
// Pair Sum

function pairSum(arr, n, target) {
    let left = 0;
    let right = n - 1;
    let count = 0;
    let pairs = new Set();
    
    while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            pairs.add(`${arr[left]},${arr[right]}`);
            count++;
            left++;
            right--;
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    if (count === 0) {
        return -1;
    } else {
        return count;
    }
}