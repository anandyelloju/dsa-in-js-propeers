// Non-Decreasing Array

function canBecomeNonDecreasing(arr, arr_len) {
    let count = 0;
    for (let i = 0; i < arr_len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            count++;
            if (count > 1) {
                return false; // More than 1 violation found
            }
            // Fixing the violation
            if (i > 0 && arr[i - 1] > arr[i + 1]) {
                arr[i + 1] = arr[i];
            } else {
                arr[i] = arr[i + 1];
            }
        }
    }
    return true;
}

function main() {
    const test_cases = parseInt(readLine().trim(), 10);
    for (let i = 0; i < test_cases; i++) {
        let arr_len = parseInt(readLine().trim(), 10);
        let arr = readLine().trim().split(' ').map(Number);
        console.log(canBecomeNonDecreasing(arr, arr_len));
    }
}
