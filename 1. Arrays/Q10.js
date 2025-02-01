// Bubble Sort

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function main() {
    let input_stdin_array = input_stdin.split("\n");
    let index = 0;
    let T = parseInt(input_stdin_array[index++]); // Number of test cases

    for (let t = 0; t < T; t++) {
        let N = parseInt(input_stdin_array[index++]); // Size of the array
        let arr = input_stdin_array[index++].trim().split(' ').map(Number); // Array elements

        // Perform Bubble Sort
        let sortedArr = bubbleSort(arr);

        // Output the sorted array for this test case
        console.log(sortedArr.join(' '));
    }
}

// Input reading setup
process.stdin.resume();
process.stdin.setEncoding('ascii');
let input_stdin = "";
process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    main();
});
