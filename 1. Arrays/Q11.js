// Selection Sort

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

function main() {

    const input = input_stdin_array;
    let index = 0;
    const T = parseInt(input[index++]); // number of test cases

    for (let t = 0; t < T; t++) {
        const N = parseInt(input[index++]); // size of the array for this test case
        const arr = input[index++].trim().split(' ').map(Number); // the array itself

        // Sort the array using selection sort
        const sortedArr = selectionSort(arr);

        // Output the sorted array for this test case
        console.log(sortedArr.join(' '));
    }

}