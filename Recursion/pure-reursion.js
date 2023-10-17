function collectOdd(num) {
  let result = [];
  if (num.length === 0) {
    return result;
  }
  if (num[0] % 2 !== 0) {
    result.push(num[0]);
  }
  return result.concat(collectOdd(num.slice(1)));
}

console.log(
  '🚀 ~ file: helper-method-resursion.js:17 ~ collectOdd:',
  collectOdd([1, 4, 896451, 852, 54, 89, 96, 6, 4, 64])
);
