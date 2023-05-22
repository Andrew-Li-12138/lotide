const assertArraysEqual = function(arrayX, arrayY) {
  if (eqArrays(arrayX, arrayY)) {
    console.log("\u2705\u2705 Assertion Passed: arrays are equal");
  } else {
    console.log("\u274C\u274C Assertion Failed: arrays are not equal");
  }

};

const eqArrays = function(arrayX, arrayY) {
  if (arrayX.length !== arrayY.length) {
    return false;
  }
  for (let i = 0;  i < arrayX.length; i++) {
    if (arrayX[i] !== arrayY[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(arrays) {
  let midArray = [];
  if (arrays.length === 1 || arrays.length === 2) {
    return [];
  } else if (arrays.length % 2 !== 0) {
    let midOddIndex = Math.floor(arrays.length / 2);
    midArray.push(arrays[midOddIndex]);
  } else if (arrays.length % 2 === 0) {
    let midEvenIndexA = arrays.length / 2 - 1;
    let midEvenIndexB = arrays.length / 2;
    let midEvenArrayA = []; let midEvenArrayB = [];
    midEvenArrayA.push(arrays[midEvenIndexA]);
    midEvenArrayB.push(arrays[midEvenIndexB]);
    midArray = midEvenArrayA.concat(midEvenArrayB);
  }
  return midArray;
};

console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1]));
console.log(middle([1, 2]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
