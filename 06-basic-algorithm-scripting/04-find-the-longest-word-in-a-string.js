function findLongestWordLength(str) {
  let arrStr = str.split(' ');
  let result = 0;
  for (let str of arrStr) {
    if (str.length > result) {
      result = str.length;
    }
  }
  return result;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
