// Beautiful String

function makeBeautiful(str) {
  let opsFor1010 = 0;
  let opsFor0101 = 0;

  for (let i = 0; i < str.length; i++) {
    // Check if current character is out of place for both patterns
    if (str[i] === "0") {
      if (i % 2 === 0) {
        opsFor1010++; // Should be '1' for "1010..."
      } else {
        opsFor0101++; // Should be '1' for "0101..."
      }
    } else {
      if (i % 2 === 0) {
        opsFor0101++; // Should be '0' for "0101..."
      } else {
        opsFor1010++; // Should be '0' for "1010..."
      }
    }
  }

  // Return the minimum of the two operation counts
  return Math.min(opsFor1010, opsFor0101);
}
