// Rotate An Array By K

function rotate(arr , k){

    /* Write your code here No need to specify return type Input and output already taken care of */

    // You don't need to return anything , just rotate the array in-place
    for (let i = 0; i < k; i++){
        arr.push(arr.shift());
    }
}