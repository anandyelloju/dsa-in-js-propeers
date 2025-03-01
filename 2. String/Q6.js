// First non repeating character

function firstNonRepeatingCharacter(str) {
  let charCount = {}; // Initialize an empty object to count character occurrences

  // Count the occurrences of each character in the string
  for (let char of str) {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first character with a count of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return the first character of the string
  return str[0];
}

