const countLetters = require('../countLetters');
const assert = require('chai').assert;
countLetters("lighthouse in the house");

describe("countLetters", ( )=> {
  it("returns 4 for countLetters('lighthouse in the house')['h']", () => {
    assert.strictEqual(countLetters('lighthouse in the house')['h'], 4);
  });

  it("returns 3 for countLetters('lighthouse in the house')['e']", () => {
    assert.strictEqual(countLetters('lighthouse in the house')['e'], 3);
  });

  it("returns 2 for countLetters('lighthouse in the house')['u']", () => {
    assert.strictEqual(countLetters('lighthouse in the house')['u'], 2);
  });

  it("returns 1 for countLetters('lighthouse in the house')['l']", () => {
    assert.strictEqual(countLetters('lighthouse in the house')['l'], 1);
  });
});

//test code
