// Sort 0 1 2

function sort(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      // arr[mid] === 2
      [arr[high], arr[mid]] = [arr[mid], arr[high]];
      high--;
    }
  }
}

function main() {
  let t = parseInt(readLine());

  while (t-- > 0) {
    let n = parseInt(readLine());
    const arr = readLine().replace(/\s+$/g, "").split(" ");

    let array = [];

    for (let i = 0; i < n; i++) {
      array.push(Number(arr[i]));
    }

    let res = sort(array);
    console.log(...array);
  }
}
