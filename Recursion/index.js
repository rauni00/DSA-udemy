// Recursion
// A process (a function in our case ) calls itself
const abc = {
  name: 'aniket',
  age: 5,
  require: true,
};

const array = [abc, { ...abc, name: 'RAhul' }];
// console.log('🚀 ~ file: index.js:10 ~ array:', array);

console.log(array[1].name);
