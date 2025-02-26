// Minimum Parentheses

function minimumParentheses(pattern) {
  let openCount = 0;
  let closeCount = 0;

  for (let char of pattern) {
    if (char === ")" && openCount === 0) {
      closeCount += 1;
    } else if (char === ")" && openCount > 0) {
      openCount -= 1;
    } else if (char === "(") {
      openCount += 1;
    }
  }

  return openCount + closeCount;
}