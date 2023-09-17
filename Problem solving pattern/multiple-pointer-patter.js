//! multiples pointer patter
//  function takes shorted array and return both value is and his sum is 0
// examples = sumZero([-3,-2,0,1,-3]) => [-3,-3]
// examples = sumZero([1,2,3]) => undefined
// examples = sumZero([5,11,63,96]) => undefined
//! native version
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
// console.log(
//   '🚀 ~ file: multiple-pointer-patter.js:14 ~ sumZero([-3, -2, 0, 1, -3]):',
//   sumZero([-3, -2, 0, 1, 2])
// );

//! refractor version
const sumZeroR = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    return sum === 0 ? [arr[left], arr[right]] : sum > 0 ? right-- : left++;
    //  if (sum === 0) {
    //    return [arr[left], arr[right]];
    //  } else if (sum > 0) {
    //    right--;
    //  } else left++;
  }
};
// console.log(
//   '🚀 ~ file: multiple-pointer-patter.js:35 ~ sumZeroR([1, 2, 3]):',
//   sumZeroR([-3, 1, 2, 3])
// );

//! Count Unique Value
// My Solution
const countUniqueValue = (arr) => {
  let obj = {};
  for (let value of arr) {
    obj[value] = value;
  }
  return Object.keys(obj).length;
};
// console.log(
//   '🚀 ~ file: multiple-pointer-patter.js:50 ~ countUniqueValue([1, 1, 1, 1, 1, 1, 1, 1, 2]):',
//   countUniqueValue([526, 5, 52, 96, 18, 13, 10, 1, 2])
// );

const countUniqueValueR = (arr) => {
  arr.length == 0 && 0;
  if (arr.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// console.log(
//   '🚀 ~ file: multiple-pointer-patter.js:64 ~ countUniqueValueR([526, 5, 52, 96, 18, 13, 10, 1, 2]):',
//   countUniqueValueR([])
// );
