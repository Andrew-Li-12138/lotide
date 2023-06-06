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

