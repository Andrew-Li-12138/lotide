
const without = function(source, itemsToRemove) {
  let resultArray = [];
  for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        found = true;
        break;
      }
    }
    if (!found) {
      resultArray.push(source[i]);
    }
  }
  return resultArray;
};

module.exports = without;

//functions for test code
const assertArraysEqual = function(arrayX, arrayY) {
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

console.log(without(["1", "2", "3"], [1, 2, "3"]))
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); 
assertArraysEqual(without(words, []), ["hello", "world", "lighthouse"]); 
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); 
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]); 
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 
assertArraysEqual(without([], [1, 2, 3]), []); 
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); 