const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(tail([1,2,3,4,5]));
console.log(tail([]));
console.log(tail(["only"]));
console.log(tail(["dog","fish","cat","shark"]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);