console.log('****** test code for assertObjectsEqualTest.js ******');

const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

//test code - primitives as values
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject));//true
assertObjectsEqual(shirtObject , anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); //false
assertObjectsEqual(shirtObject , longSleeveShirtObject);

//test code - arrays as values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // true
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // false
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);

console.log('************');