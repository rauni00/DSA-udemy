//! frequency counters Patterns
// this pattern uses objects or sets to collect values/ frequencies of values

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same ([1,2,3], [4,1,9]) // true
// same ([1,2,3], [1,9]) // false
// same ([1,2,1], [4,4,1]) // false (must be same frequency)

// Native Solution N^2
let same = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let element of arr1) {
    let index = arr2.indexOf(element ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
};

// Refractor Solution O(n)
let sameR = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (let key in obj1) {
    const squaredKey = key ** 2;
    if (!(squaredKey in obj2) || obj1[key] !== obj2[squaredKey]) {
      return false;
    }
  }
  return true;
};
// sameR([1, 2, 3], [1, 4, 9]);
// console.log('🚀 ~ file::', sameR([1, 2, 3], [1, 46, 9]));

// problem 2
//ANAGRAMS
// inputs ("","")=>true
//  ("anagram",nagram)=>true
// ("rat","car")=>false
// make a hashmapop

const anagram = (inp1, inp2) => {
  if (inp1.length !== inp2.length) {
    return false;
  } else if (inp1.length === inp2.length && inp1.length === 1) return true;
  else {
    // let map = new Map();
    // for (let i = 0; i < inp1.length; i++) {
    //   if (map.has(inp1[i])) {
    //     map.set(inp1[i], map.get(inp1[i] + 1));
    //   } else {
    //     map.set(inp1[i], 1);
    //   }
    // }

    let obj1 = {};
    for (let element of inp1) {
      if (obj1.hasOwnProperty(element)) {
        obj1[element] = obj1[element] + 1;
      } else {
        obj1[element] = 1;
      }
    }
    // for (let i = 0; i < inp1.length; i++) {
    //   if (!obj1.hasOwnProperty(inp1[i]) || !obj1.hasOwnProperty(inp1[i]))
    //     return false;
    // }
    // return true;
  }
};

// Solution for anagram with frequency counter
const validateAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let value of first) {
    if (lookup[value]) {
      lookup[value] += 1;
    } else lookup[value] = 1;
  }
  for (let value of second) {
    if (!lookup[value]) {
      return false;
    } else lookup[value] -= 1;
  }
  return true;
};

// console.log(
//   "🚀 ~ file: frequency-counters-patther.js:104 ~ validateAnagram('rahul', 'lahuk'):",
//   validateAnagram('rahul', 'raluh')
// );
