const reverseString = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
let str = 'Lets work with no one then will be best for';
let arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = reverseString(arr[i]);
// }
// console.log(arr.join(' '));

for (let i = 0; i < arr.length; i++) {
  let first = arr[i];
  arr[i] = first[0].toUpperCase() + first.slice(1);
}

console.log(arr.join(' '));
