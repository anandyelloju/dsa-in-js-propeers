// Check Permutation

function areAnagram(str1, str2) {
    // If lengths are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Sort both strings and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}