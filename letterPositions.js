const letterPositions = function(sentence) {
  //create an empty object to correct output to return later
  const results = {};
  //create a loop over string
  for (let i = 0; i < sentence.length; i++) {
    //exclude space
    if (sentence[i] !== " ") {
      //when results[sentence[i]] is not in object, create key resulys[sentence[i]] and assign an empty array as its value
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      //when reuslts[sentence[i]] already exist in the object, push index number to the existed empty array
      results[sentence[i]].push(i);
    }
  }
  return results;
};

//these two functions are copied to help write test code
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

//test code
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house")["h"],[3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
