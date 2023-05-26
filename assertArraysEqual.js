const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    console.log(`\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u274C\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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

assertArraysEqual([1, 2, 3],[1, 2, 3]);
assertArraysEqual([1, "2" ,3], [1, 2, 3]);
assertArraysEqual([5, 6, 7],[1, 2, 3]);
assertArraysEqual(["1", "2", "3"],["1", "2", "3"]);
