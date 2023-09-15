// ! Object
let obj = {
  name: 'Rahul',
  age: 85,
  fav: [5, 8, 5, 8, 6],
};

// console.log(Object.keys(obj));
// console.log(Object.entries(obj));
// console.log(obj.hasOwnProperty('fav'));

//! Array

// fuction takes input and return string number

const countString = (str) => {
  let obj = {};
  for (const element of str) {
    obj[element] = (obj[element] || 0) + 1;
  }
  return obj;
};
const countString1 = (str) => {
  let obj = {};
  for (const element of str) {
    let val = element.charCodeAt(0);
    if (
      !(val > 47 && val < 58) &&
      !(val > 64 && val < 91) &&
      val > 96 &&
      val < 123
    ) {
      if (obj[element] > 0) {
        obj[element]++;
      } else {
        // console.log(element.charCodeAt(0));
        obj[element] = 1;
      }
    }
  }
  return obj;
};

console.log(countString1('hello i am number 23 3gh12@'));
