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
    if (arrayKey1[key] !== arrayKey2[key]) {
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
//test code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); //true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); //false

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

