// Given a string, find the next smallest palindrome

function nextLargestPalindrome(s, length) {
  // Check if the length of the string is odd or even
  let odd = length % 2;
  let center = "";
  if (odd) {
    center = s[Math.floor(length / 2)];
  }
  let left = s.substring(0, Math.floor(length / 2));
  let right = left.split("").reverse().join("");
  let palindrome = left + center + right;

  // Check if the constructed palindrome is greater than the original string
  if (palindrome > s) {
    return palindrome;
  } else {
    // Handle the center increment logic
    if (center) {
      if (center < "9") {
        center = String.fromCharCode(center.charCodeAt(0) + 1);
        return left + center + right;
      } else {
        center = "0";
      }
    }
    if (left === "9".repeat(left.length)) {
      return "1" + "0".repeat(length - 1) + "1";
    } else {
      left = inc(left);
      return left + center + left.split("").reverse().join("");
    }
  }
}

function inc(strNum) {
  let leftList = strNum.split("");
  let last = leftList.length - 1;
  while (leftList[last] === "9") {
    leftList[last] = "0";
    last -= 1;
  }
  leftList[last] = String.fromCharCode(leftList[last].charCodeAt(0) + 1);
  return leftList.join("");
}
