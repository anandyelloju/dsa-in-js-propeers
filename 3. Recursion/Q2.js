// Quick Sort

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function quickSort(arr, left, right) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
}

function partition(arr, left, right) {
    let pivot = arr[right]; // choosing the rightmost element as the pivot
    let i = left - 1; // index of smaller element

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            // swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // swap arr[i + 1] and arr[right] (pivot)
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

function sortArray(arr) {
    quickSort(arr, 0, arr.length - 1);
    return arr;
}

function main() {
    let input = '';
    let inputArray = [];

    rl.on('line', (line) => {
        input += line + '\n';
    });

    rl.on('close', () => {
        inputArray = input.trim().split('\n');
        processInput(inputArray);
    });
}

function processInput(inputArray) {
    let T = parseInt(inputArray[0].trim());
    let index = 1;
    let results = [];

    for (let t = 0; t < T; t++) {
        let N = parseInt(inputArray[index++].trim());
        let arr = inputArray[index++].trim().split(' ').map(Number);
        
        sortArray(arr);
        results.push(arr.join(' '));
    }

    results.forEach(result => console.log(result));
}

main();
