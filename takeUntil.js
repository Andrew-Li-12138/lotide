//parameter 'array' takes arrays, paramter 'callback' takes callback functions
const takeUntil = function(array, callback) {
  let arrayUntil = [];
  //loop over array using index
  for (let i = 0; i < array.length; i++) {
    //represent elements in array by 'array[i]', pass them in callback function, and check if callback function returns truthy value
    if (callback(array[i])) {
    //when callback function returns truthy value, slice original array into a new array called 'arrayUntil'
    //start from index 0, and end at the index of element which caused truthy value of callback funcion
      arrayUntil = array.slice(0, i);
      //function 'takeUntil' returns the new array and immidiately stop the loop and the function when a truthy value is returned from callback function
      return arrayUntil;
    }
  }
};

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