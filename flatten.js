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

const flatten = function(arrays) {
  let flatArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      flatArray = flatArray.concat(arrays[i]);
    } else {
      flatArray.push(arrays[i]);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([23, 44, [67, 89], 56, [88, 66], 7]), [23, 44, 67, 89, 56, 88, 66, 7]);

 