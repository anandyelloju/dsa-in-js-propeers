// Container With Most Water

function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const currentWater = minHeight * width;

        maxWater = Math.max(maxWater, currentWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

function main() {
    const t = parseInt(readLine());  // Read the number of test cases
    for (let i = 0; i < t; i++) {
        const n = parseInt(readLine());  // Read the size of the array
        const height = readLine().split(' ').map(Number);  // Read the array

        const result = maxArea(height);  // Call the function with the array

        console.log(result);  // Print the result
    }
}
