const assert = require('chai').assert;
const without = require('../without');

describe("without", ( )=> {
  it("returns ['hello', 'world'] for without(['hello', 'world', 'lighthouse'], ['lighthouse'])", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']);
  });

  it("returns ['hello', 'world', 'lighthouse'] for without(['hello', 'world', 'lighthouse'], [])", () => {
    assert.deepEqual(without(['hello', 'world', 'lighthouse'], []), ['hello', 'world', 'lighthouse']);
  });

  it("returns [2, 3] for without([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns [1, 2, 3] for without([1, 2, 3], [4])", () => {
    assert.deepEqual(without([1, 2, 3], [4]), [1, 2, 3]);
  });

  it("returns ['1', '2'] for without(['1','2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(['1','2', '3'], [1, 2, '3']), ['1', '2']);
  });

  it("returns [] for without([], [1, 2, 3])", () => {
    assert.deepEqual(without([], [1, 2, 3]), []);
  });

  it("returns [1, 2, 3] for without([1, 2, 3], [])", () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });
  
});

// console.log(without(["1", "2", "3"], [1, 2, "3"]))
// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']); 
// assertArraysEqual(without(words, []), ["hello", "world", "lighthouse"]); 
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); 
// assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]); 
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 
// assertArraysEqual(without([], [1, 2, 3]), []); 
// assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); 