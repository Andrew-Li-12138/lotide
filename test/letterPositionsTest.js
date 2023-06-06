const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("letterPositions", ( )=> {
  it("returns [2, 3] for letterPositions('hello')['l']", () => {
    assert.deepEqual(letterPositions("hello")["l"], [2, 3]);
  });

  it("returns [3, 5, 15, 18] for letterPositions('lighthouse in the house')['h']", () => {
    assert.deepEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18]);
  });

  
  it("returns [9, 16, 22] for letterPositions('lighthouse in the house').e", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
  });
});
