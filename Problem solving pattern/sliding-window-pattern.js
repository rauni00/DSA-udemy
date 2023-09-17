//! Sliding-window-pattern
// maxSubArraySum([1,2,5,8,1,5],2) => 10
// Native Solm
const maxSubArraySum = (arr, n) => {
  if (arr.length == 0) return null;
  let sum = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > sum) {
      sum = temp;
    }
  }
  return sum;
};

// console.log(
//   '🚀 ~ file: sliding-window-pattern.js:19 ~ maxSubArraySum([1, 2, 5, 8, 1, 5], 2):',
//   maxSubArraySum([1, 2, 1, 0, 1, 5], 2)
// );
const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(
  '🚀 ~ file: sliding-window-pattern.js:39 ~ maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3):',
  maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
);
