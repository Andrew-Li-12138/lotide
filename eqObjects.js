// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
//check if object1 and object 2 have same amount of keys
//since we can't compare object's length directly, we push objects' keys in arrays and compare the length of arrays
  let arrayKey1 = []; let arrayKey2 = [];
  for (let key1 in object1) {
    arrayKey1.push(key1);
  }
  for (let key2 in object2) {
    arrayKey2.push(key2);
  }
  //if the length of the arrays are not equal, return false
  if (arrayKey1.length !== arrayKey2.length) {
    return false;
  }
  //check if object 1 and 2 have same values for same keys
  for (let key of arrayKey1) {
    //check if both values are array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //if value is an array, compare value with same key between object 1 and 2 using eqArrays.
      //if eqArrays returns false, eqObject returns false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // if eqArrays return true, excute else if, where we compare if the primitive values equal.
      // if the values are not equal, return false
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  //if all of the "return false" scenario did not happen, return true
  return true;
};

//this function is  copied for supporting writting of eqObject
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

//this code is copied here to help write test code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }

};
//test code - primitives as values
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); //true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); //false

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

//test code - arrays as values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // false

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
