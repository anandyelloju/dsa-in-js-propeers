// Merge Sort

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function main() {
    const T = parseInt(readLine()); // Number of test cases
    
    for (let t = 0; t < T; t++) {
        const N = parseInt(readLine()); // Length of the array
        const arr = readLine().split(' ').map(Number); // Array of numbers

        const sortedArr = mergeSort(arr); // Sort the array using Merge Sort
        
        console.log(sortedArr.join(' '));
    }
}
