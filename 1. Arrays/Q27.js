// https://www.naukri.com/code360/problems/print-spiral_547
// Print Spiral

function spiralPrint(matrix, nRows, mCols) {
    if (nRows === 0 || mCols === 0) return; // Early exit for empty matrices

    let result = [];
    let top = 0, bottom = nRows - 1;
    let left = 0, right = mCols - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right on the current top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // Move to the next row

        // Traverse from top to bottom on the current right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // Move to the previous column

        if (top <= bottom) {
            // Traverse from right to left on the current bottom row
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // Move to the previous row
        }

        if (left <= right) {
            // Traverse from bottom to top on the current left column
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // Move to the next column
        }
    }

    console.log(result.join(" "));
}

// Taking Input
function take2DInput() {
    const input = readline().split(" ");
    const nRows = parseInt(input[0]);
    const mCols = parseInt(input[1]);

    if (nRows === 0 || mCols === 0) {
        return [[], 0, 0];
    }

    const matrix = [];
    for (let i = 0; i < nRows; i++) {
        const row = readline().split(" ").map(Number);
        matrix.push(row);
    }

    return [matrix, nRows, mCols];
}

// Main function
function main() {
    const t = parseInt(readline());
    
    for (let i = 0; i < t; i++) {
        const [matrix, nRows, mCols] = take2DInput();
        spiralPrint(matrix, nRows, mCols);
        console.log(); // Print a new line after each test case
    }
}
