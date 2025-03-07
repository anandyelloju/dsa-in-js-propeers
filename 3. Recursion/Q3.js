// Tower of Hanoi

function towerOfHanoi(n) {
    const moves = [];

    function solveHanoi(n, source, target, auxiliary) {
        if (n === 1) {
            moves.push([source, target]);
            return;
        }
        solveHanoi(n - 1, source, auxiliary, target);
        moves.push([source, target]);
        solveHanoi(n - 1, auxiliary, target, source);
    }

    solveHanoi(n, 1, 3, 2);
    return moves;
}