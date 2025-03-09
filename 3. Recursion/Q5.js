// Family Structure

function kthChildNthGeneration(n, k) {
    if (k == 1) {
        return "Male";
    } else if (k == 2) {
        return "Female";
    }

    let parentK = Math.ceil(k / 2);
    let parentGender = kthChildNthGeneration(n - 1, parentK);

    if (k % 2 == 0) {
        return parentGender === "Male" ? "Female" : "Male";
    } else {
        return parentGender;
    }
}
