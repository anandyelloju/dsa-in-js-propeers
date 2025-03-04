// Group Anagrams

function getAnagramKey(word) {
  let count = new Array(26).fill(0);
  for (let char of word) {
    count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  return count.join("#");
}

function getGroupedAnagrams(inputStr) {
  let map = {};
  for (let word of inputStr) {
    let key = getAnagramKey(word);
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }
  let result = [];
  for (let key in map) {
    result.push(map[key].sort()); // Sort each group lexicographically
  }
  result.sort((a, b) => a[0].localeCompare(b[0]));
  return result;
}

function main() {
  let T = parseInt(readLine());

  for (let t = 0; t < T; t++) {
    let N = parseInt(readLine());
    let inputStr = readLine().split(" ");
    let anagramGroups = getGroupedAnagrams(inputStr);

    for (let group of anagramGroups) {
      console.log(group.join(" "));
    }
  }
}
