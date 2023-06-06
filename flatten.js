
const flatten = function(arrays) {
  let flatArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      flatArray = flatArray.concat(arrays[i]);
    } else {
      flatArray.push(arrays[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;



 