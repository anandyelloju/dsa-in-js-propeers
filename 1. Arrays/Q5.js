// First Missing Positive

function findFirstMissingPositive(arr, arr_len) {
    arr.sort((a, b) => a - b);
    let missing = 1;
    for (let i = 0; i < arr_len; i++) {
        if (arr[i] === missing) {
            missing++;
        }
    }

    return missing;
}

function main() {

   const test_cases = parseInt(readLine().trim());
    for (let i = 0; i < test_cases; i++) {
        let arr_len = parseInt(readLine().trim());
        let arr = readLine().trim().split(' ').map(Number);
        console.log(findFirstMissingPositive(arr, arr_len));
    }

}