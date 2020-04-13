// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countdownArr = countdown(n - 1);
    countdownArr.unshift(n);
    return countdownArr;
  }
}
// Only change code above this line
