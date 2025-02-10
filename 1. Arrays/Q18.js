// Move All Negative Numbers To Beginning And Positive To End

function separateNegativeAndPositive(nums) {
    let negatives = nums.filter(num => num < 0);
    let positives = nums.filter(num => num >= 0);
    return negatives.concat(positives);
}