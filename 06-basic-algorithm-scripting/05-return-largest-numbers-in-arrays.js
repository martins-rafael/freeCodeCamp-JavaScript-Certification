function largestOfFour(arr) {
  let newArr = [];
  for (let num of arr) {
    let highest = num[0];

    for (let anotherNum of num)
      if (anotherNum > highest) {
        highest = anotherNum
      }
    newArr.push(highest);
  }
  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
