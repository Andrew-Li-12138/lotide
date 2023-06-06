const assert = require('chai').assert;
const flatten = require('../flatten');

describe("flatten", ( )=> {
  it("returns [1, 2, 3, 4, 5] for [1, [2, 3], 4, 5]", () => {
    assert.deepEqual(flatten([1, [2, 3], 4, 5]), [1, 2, 3, 4, 5]);
  });

  it("returns ['a', 'b', 'c', 'd', 'e', 'f'] for [['a']['b', 'c'], 'd', [['e']], 'f']", () => {
    assert.deepEqual(flatten([['a'], ['b', 'c'], 'd', ['e'], 'f']), ['a', 'b', 'c', 'd', 'e', 'f']);
  });  

});