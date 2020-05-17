function getIndexToIns(arr, num) {
  let index = 0;

  for (let item of arr) {
    if (item < num) index++;
  }

  return index;
}

console.log(getIndexToIns([40, 60], 50));
