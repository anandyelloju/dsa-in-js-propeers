// Find K’th Character of Decrypted String

function kThCharacterOfDecryptedString(s, k) {
  let i = 0;
  let n = s.length;

  while (i < n) {
    // Extract the substring part
    let substr = "";
    while (i < n && isNaN(s[i])) {
      substr += s[i];
      i++;
    }

    // Extract the frequency part
    let freqStr = "";
    while (i < n && !isNaN(s[i])) {
      freqStr += s[i];
      i++;
    }

    // Convert frequency to integer
    let freq = parseInt(freqStr);

    // Calculate the length of the expanded substring
    let expandedLen = substr.length * freq;

    // Check if the kth character is within this segment
    if (k <= expandedLen) {
      // Find the character in the expanded string
      return substr[(k - 1) % substr.length];
    } else {
      // Move k beyond this segment
      k -= expandedLen;
    }
  }

  return ""; // In case k is out of bounds, though per problem statement it won't be
}
