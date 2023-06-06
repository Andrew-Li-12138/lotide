
console.log('*test code for map function*');

const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 2, 3, 4];
const results2 = map(numbers, number => number * 2);
assertArraysEqual(results2,[2, 4, 6, 8]);

const cuteAnimals = ["dogs", "cats", "dolpins", "pikachus", "Bulbasaurs"];
const results3 = map(cuteAnimals, animal => animal + " are cute!");
assertArraysEqual(results3, ['dogs are cute!', 'cats are cute!', 'dolpins are cute!', 'pikachus are cute!', 'Bulbasaurs are cute!']);
console.log('----------------');