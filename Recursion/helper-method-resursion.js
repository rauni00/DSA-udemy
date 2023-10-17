function collectOdd(num) {
  const result = [];
  const helper = (inp) => {
    if (inp.length === 0) {
      return;
    }
    if (inp[0] % 2 !== 0) {
      result.push(inp[0]);
    }
    helper(inp.slice(1));
  };
  helper(num);
  return result;
}

console.log(
  '🚀 ~ file: helper-method-resursion.js:17 ~ collectOdd:',
  collectOdd([1])
);
