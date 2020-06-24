const squareList = (arr) => {
  // Only change code below this line
  return arr
    .filter(number => number > 0 && number % parseInt(number) === 0)
    .map(number => Math.pow(number, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
