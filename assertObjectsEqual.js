const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`\u274C\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//these two functions are copied to be used in function assertObjectsEqaul
const eqObjects = function(object1, object2) {
  let arrayKey1 = []; let arrayKey2 = [];
  for (let key1 in object1) {
    arrayKey1.push(key1);
  }
  for (let key2 in object2) {
    arrayKey2.push(key2);
  }
  if (arrayKey1.length !== arrayKey2.length) {
    return false;
  }
  for (let key of arrayKey1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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

//test code - primitives as values
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject));//true
assertObjectsEqual(shirtObject , anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); //false
assertObjectsEqual(shirtObject , longSleeveShirtObject);

//test code - arrays as values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // true
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // false
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);