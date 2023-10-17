const countdownN = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All Done!');
};

const countdown = (num) => {
  if (num <= 0) {
    console.log('All Done!!');
    return;
  }
  console.log(num);
  num--;
  countdown(num);
};

// Sum range
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};
// console.log('🚀 ~ file: first.js:24 ~ sumRange ~ sumRange:', sumRange(4));

const factorial = (num) => {
  let numb = 1;
  for (let i = 1; i <= num; i++) {
    numb *= i;
  }
  return numb;
};

const factorialRec = (num) => {
  if (num == 1) {
    return 1;
  } else {
    return num * factorialRec(num - 1);
  }
};
console.log(factorial(10));
