
const middle = function(arrays) {
  let midArray = [];
  if (arrays.length === 1 || arrays.length === 2) {
    return [];
  } else if (arrays.length % 2 !== 0) {
    let midOddIndex = Math.floor(arrays.length / 2);
    midArray.push(arrays[midOddIndex]);
  } else if (arrays.length % 2 === 0) {
    let midEvenIndexA = arrays.length / 2 - 1;
    let midEvenIndexB = arrays.length / 2;
    let midEvenArrayA = []; let midEvenArrayB = [];
    midEvenArrayA.push(arrays[midEvenIndexA]);
    midEvenArrayB.push(arrays[midEvenIndexB]);
    midArray = midEvenArrayA.concat(midEvenArrayB);
  }
  return midArray;
};

module.exports = middle;


