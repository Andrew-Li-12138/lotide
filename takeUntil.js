//parameter 'array' takes arrays, paramter 'callback' takes callback functions
const takeUntil = function(array, callback) {
  //find out the index of the element passing to callback function and returns truthy value
  let endIndex = array.findIndex(callback);
  //slice the original array from beginning (index 0) to the element that made callback function return true
  //immediately return new array and finish the function
  return array.slice(0, endIndex);
};

module.exports = takeUntil;

//these two fucntions are for writting test code
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

//test code

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood' ]);