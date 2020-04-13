function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    let num = rangeOfNumbers(startNum, endNum - 1);
    num.push(endNum);
    return num;
  }
};
