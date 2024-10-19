// Second Largest Element

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return -1;
    }

    let first = -Infinity;
    let second = -Infinity;
    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? -1 : second;
}

function main() {
    let freq = parseInt(readLine());

    for (let i = 0; i < freq; i++) {
        let arr_freq = parseInt(readLine());
        const arr = readLine().replace(/\s+$/g, '').split(' ').map(Number);
        let x = findSecondLargest(arr);
        console.log(x);
    }
}
