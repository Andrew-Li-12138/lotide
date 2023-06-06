
const assert = require('chai').assert;
const findKeyByValue  = require('../findKeyByValue');
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  documentary: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  street: "Brooklyn Nine-Nine",
  drama: "The Wire",
  scary: "The Wire" 
};

describe("#findKeyByValue", ( )=> {
  it("returns 'drama' for findKeyByValue(bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for findKeyByValue(bestTVShowsByGenre, 'That '70s Show')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"),undefined);
  });

  it("returns 'comedy' for findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });

  it("returns  'sci_fi' for findKeyByValue(bestTVShowsByGenre, 'The Expanse')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"),  "sci_fi");
  });

});

