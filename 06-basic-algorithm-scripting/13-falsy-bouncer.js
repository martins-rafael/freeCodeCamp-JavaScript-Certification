function bouncer(arr) {
  const newArr = [];
  for (let item of arr) {
    if (item) {
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
