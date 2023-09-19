//! Divide and Conquer pattern
const search = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
// console.log(
//   '🚀 ~ file: Divide-and-Conqure-pattern.js:5 ~ search ~ search:',
//   search([1, 2, 3, 4, 5, 6], 6)
// );

const searchR = (array, value) => {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (array[middle] < value) {
      min = middle + 1;
    } else if (array[middle] > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
console.log(
  '🚀 ~ file: Divide-and-Conqure-pattern.js:23 ~ searchR ~ searchR:',
  searchR([1, 2, 3, 4, 5, 6], 6)
);
