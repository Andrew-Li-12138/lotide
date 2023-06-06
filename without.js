
const without = function(source, itemsToRemove) {
  let resultArray = [];
  for (let i = 0; i < source.length; i++) {
    let found = false;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        found = true;
        break;
      }
    }
    if (!found) {
      resultArray.push(source[i]);
    }
  }
  return resultArray;
};

module.exports = without;

