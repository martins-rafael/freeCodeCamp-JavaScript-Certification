function sumAll(arr) {
  let result = 0;

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    result += i;
  }
  return result;
}

console.log(sumAll([1, 4]));
