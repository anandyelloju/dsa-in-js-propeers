// Matrix Is Symmetric

function isSymmetric(matrix, N) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}

function main() {
    let T = parseInt(readLine().trim());

    while (T-- > 0) {
        let N = parseInt(readLine().trim());
        let matrix = [];

        // Read the matrix elements
        let elements = readLine().trim().split(' ').map(Number);

        // Construct the matrix
        for (let i = 0; i < N; i++) {
            matrix[i] = [];
            for (let j = 0; j < N; j++) {
                matrix[i][j] = elements[i * N + j];
            }
        }

        // Check if the matrix is symmetric
        if (isSymmetric(matrix, N)) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
}
