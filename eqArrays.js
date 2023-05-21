const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);