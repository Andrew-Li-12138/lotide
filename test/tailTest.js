const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", ( )=> {
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for ['only']", () => {
    assert.deepEqual(tail(["only"]), []);
  });

  it("returns ['fish','cat','shark'] for ['dog', 'fish','cat','shark']", () => {
    assert.deepEqual(tail(['dog', 'fish','cat','shark']), ['fish','cat','shark'])
  });

});
