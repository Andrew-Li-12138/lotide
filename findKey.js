//function takes object and callback
const findKey = function(object, callback) {
  //create a for..in loop over keys in object
  for (let item in object) {
    //passing key to callback function
    //note that 'ietm' is just a string value. object[item] retrieves the value associated with key.
    if (callback(object[item]))
    //return first key of which the callback returns a truthy value
      return item;
  }
  //return undefined of no key is found
  return undefined;
};

module.exports = findKey;
//this function is for writting test code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }

};
//test code
let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(result1, "noma");
