
//these two functions are for writting test code
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

//lotide version map function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 2, 3, 4];
const results2 = map(numbers, number => number * 2);
assertArraysEqual(results2,[2, 4, 6, 8]);

const cuteAnimals = ["dogs", "cats", "dolpins", "pikachus", "Bulbasaurs"];
const results3 = map(cuteAnimals, animal => animal + " are cute!");
assertArraysEqual(results3, ['dogs are cute!', 'cats are cute!', 'dolpins are cute!', 'pikachus are cute!', 'Bulbasaurs are cute!']);