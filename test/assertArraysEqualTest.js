console.log('****** test for assertArraysEqual ******')
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3],[1, 2, 3]);
assertArraysEqual([1, "2" ,3], [1, 2, 3]);
assertArraysEqual([5, 6, 7],[1, 2, 3]);
assertArraysEqual(["1", "2", "3"],["1", "2", "3"]);

console.log('************')