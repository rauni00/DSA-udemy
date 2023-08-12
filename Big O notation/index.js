// Big O notation
// Objectives
// => Its imp to have a precise  vocabulary to talk about how our code performs

//  write a function that accpets a string and return a reverse copy

const reverseString = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
// console.log(console.time());
// console.log(reverseString('RAHUL'));
// console.timeEnd();

// !!!!!!!!!!!!!!!!!!!!!!!!!!
//  Add number Upto
// first Way
// ----------------------------------------
const addUpTo1 = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};
// console.time();
// addUpTo1(1000000000);
// console.timeEnd();

// ----------------------------------------
// Second Way
const addUpTo2 = (n) => {
  return (n * (n + 1)) / 2;
};

console.time();
addUpTo2(1000000000);
console.timeEnd();
