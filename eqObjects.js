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

module.exports = eqObjects;

//this function is imported for supporting writting of eqObject
const eqArrays = require('./eqArrays');
