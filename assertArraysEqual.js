const assertArrayEqual = function(arrayX, arrayY) {
  if (eqArrays(arrayX, arrayY) === true) {
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

assertArrayEqual([1, 2, 3],[1, 2, 3]);
assertArrayEqual([1, "2" ,3], [1, 2, 3]);
assertArrayEqual([5, 6, 7],[1, 2, 3]);
assertArrayEqual(["1", "2", "3"],["1", "2", "3"]);
