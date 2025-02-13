// https://www.naukri.com/code360/problems/longest-subset-zero-sum_920321
// Longest Subarray Zero Sum

function findLongestSubarrayWithZeroSum(arr) {
    let m = new Map();
    let l = 0;
    let s = 0;
    
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
        
        if (s === 0 && l < i + 1) {
            l = i + 1;
        }
        
        if (m.has(s)) {
            if (i - m.get(s) > l) {
                l = i - m.get(s);
            }
        } else {
            m.set(s, i);
        }
    }
    
    return l;
}

function main() {
    let T = parseInt(readLine()); // Read number of test cases

    for (let t = 0; t < T; t++) {
        let n = parseInt(readLine()); // Read size of the array
        let arr = readLine().split(' ').map(Number); // Read the array

        // Call the function to find the longest subarray with zero sum
        let result = findLongestSubarrayWithZeroSum(arr);
        
        // Output the result
        console.log(result);
    }
}
