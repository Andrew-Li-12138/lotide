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
//this function is copied here for the purpose of writing test code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }

};

//test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  documentary: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  street: "Brooklyn Nine-Nine",
  drama: "The Wire",
  scary: "The Wire" 
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");