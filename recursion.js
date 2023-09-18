// const countStr = (str) => {
//   let obj = {};
//   for (const element of str) {
//     let char = element.toLowerCase();
//     obj[char] = (obj[char] || 0) + 1;
//   }
//   return obj;
// };
// console.log("🚀 ~ file: server.js:239 ~ countStr('AAAA');:", countStr('AAaAA'));

function ajay() {
  return rohit();
}

function rohit() {
  return rohmit();
}
function rohmit() {
  return true;
}
// console.log(ajay());
let n = 0;
function hello() {
  n++;
  console.log('hello', n);
  hello();
}
// hello();

const multiply = (arr) => {
  let num = 1;
  for (const el of arr) {
    num *= el;
  }
  return num;
};
const multiplyRe = (arr) => {
  if (arr.length <= 0) {
    return 1;
  } else return arr[arr.length - 1] * multiplyRe(arr.slice(0, arr.length - 1));
};

// console.log(multiplyRe([1, 2, 3, 4]));

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

// factorial(5);
console.log('🚀 ~ file: recursion.js:55 ~ factorial(5):', factorialRec(16));

const rangeOfNum = (start, end) => {
  //   let arr = [];
  //   for (let i = start; i <= end; i++) {
  //     arr.push(i);
  //   }
  //   return arr;
  if (end < start) {
    return [];
  } else {
    let number = rangeOfNum(start, end - 1);
    number.push(end);
    return number;
  }
};

// rangeOfNum(1, 5);
// console.time();
// console.log(
//   '🚀 ~ file: recursion.js:66 ~ rangeOfNum(1, 5):',
//   rangeOfNum(-8, -5)
// );
// console.timeEnd();

const palindrome = (value) => {
  let str = String(value);
  let rversenum = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rversenum += str[i];
  }
  if (typeof value == 'string') return value === rversenum;
  return value === Number(rversenum);
};

console.log(palindrome(121));
