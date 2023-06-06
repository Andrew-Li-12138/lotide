//parameter 'array' takes arrays, paramter 'callback' takes callback functions
const takeUntil = function(array, callback) {
  //find out the index of the element passing to callback function and returns truthy value
  let endIndex = array.findIndex(callback);
  //slice the original array from beginning (index 0) to the element that made callback function return true
  //immediately return new array and finish the function
  return array.slice(0, endIndex);
};

module.exports = takeUntil;
