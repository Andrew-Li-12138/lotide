
const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

//test code - primitives as values
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); //true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); //false

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

//test code - arrays as values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // false

assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
