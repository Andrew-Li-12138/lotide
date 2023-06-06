//function findKeyByValue takes in an object and a value, scans the object, and  returns the first key which contains the given value
const findKeyByValue = function(object, value) {
  //create a for...in loop over every key in object
  for (let key in object) {
    //check of the value of every key and return key when value matches
    if (object[key] === value) {
      return key;
    }
  }
  //return undefined if no value matches after the completion of loop
  return undefined;
};

module.exports = findKeyByValue;


